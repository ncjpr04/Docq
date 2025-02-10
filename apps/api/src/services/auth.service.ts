import { connectDB, User } from '@workspace/database';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

export class AuthService {
  private static getJwtSecret(): string {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT_SECRET is not defined in environment variables');
    }
    return secret;
  }

  private static generateToken(user: any) {
    return jwt.sign(
      { userId: user._id.toString(), email: user.email, role: user.role, name: user.name },
      this.getJwtSecret(),
      { expiresIn: '24h', algorithm: 'HS256', audience: 'auth', issuer: 'pragati-auth' }
    );
  }

  static async validateUser(email: string, password: string, res: Response) {
    await connectDB();

    const user = await User.findOne(
      { email: email.toLowerCase() },
      '+password'
    ).select('_id email password name role lastLogin').lean();

    if (!user) throw new Error('Invalid email or password');

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) throw new Error('Invalid email or password');

    User.updateOne({ _id: user._id }, { lastLogin: new Date() }).exec();

    const token = this.generateToken(user);

    // Set HttpOnly cookie for cross-domain authentication
    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });

    return { user: { ...user, password: undefined } };
  }

  static async createUser(firstName: string, lastName: string, email: string, password: string, res: Response) {
    await connectDB();
  
    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !password) {
      throw new Error('All fields are required');
    }
  
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }
  
    const existingUser = await User.findOne({ email: email.toLowerCase() }).lean();
    if (existingUser) throw new Error('Email already registered');
  
    const hashedPassword = await bcrypt.hash(password, 12);
  
    const user = await User.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      name: `${firstName.trim()} ${lastName.trim()}`,
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      role: 'user',
      isEmailVerified: false
    });
  
    const token = this.generateToken(user);
  
    // Set HttpOnly cookie for cross-domain authentication
    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });
  
    return { user: { ...user.toObject(), password: undefined } };
  }
}
