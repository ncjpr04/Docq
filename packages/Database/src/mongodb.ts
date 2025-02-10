import mongoose from "mongoose";

const DB_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/docq";

/**
 * Connects to the MongoDB database with error handling.
 */
export async function connectDB() {
  try {
    if (mongoose.connection.readyState === 1) return mongoose.connection; // Already connected
    if (mongoose.connection.readyState === 2) {
      console.log("🔄 Database connection in progress...");
      return mongoose.connection;
    }

    await mongoose.connect(DB_URL);
    console.log("✅ Database connected successfully!");
    return mongoose.connection;
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1); // Exit the process if DB connection fails
  }
}

/**
 * Closes the MongoDB connection gracefully.
 */
export async function closeDB() {
  try {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
      console.log("✅ Database disconnected.");
    }
  } catch (error) {
    console.error("❌ Error while disconnecting from database:", error);
  }
}

// =====================
// ✅ Define Schemas
// =====================

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email format"], // Email validation
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false, // Exclude from queries by default
    },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isEmailVerified: { type: Boolean, default: false },
    lastLogin: { type: Date, default: null },
  },
  { timestamps: true }
);

// Pre-save hook: Generate full name
userSchema.pre("save", function (next) {
  this.name = `${this.firstName} ${this.lastName}`.trim();
  next();
});

// Hide sensitive fields when sending user data
userSchema.methods.toSafeObject = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

// Indexing
userSchema.index({ email: 1 });

// Static method to find users by email
userSchema.statics.findByEmail = function (email: string) {
  return this.findOne({ email: email.toLowerCase() });
};

// =====================
// ✅ Document Schema
// =====================
const documentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true, trim: true },
    content: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  { timestamps: true }
);

// Indexing
documentSchema.index({ userId: 1 });

// =====================
// ✅ Template Schema
// =====================
const templateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    content: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  { timestamps: true }
);

// Export Models
export const User = mongoose.model("User", userSchema);
export const Document = mongoose.model("Document", documentSchema);
export const Template = mongoose.model("Template", templateSchema);
