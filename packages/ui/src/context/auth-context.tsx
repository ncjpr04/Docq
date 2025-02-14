import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthResponse {
    success: boolean;
    data?: {
        user: User;
        message: string;
    };
    error?: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<AuthResponse>;
    signup: (name: string, email: string, password: string) => Promise<AuthResponse>;
    logout: () => Promise<AuthResponse>;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Update the API_URL configuration
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    axios.defaults.withCredentials = true;

    // Verify user session on mount
    useEffect(() => {
        let mounted = true;

        const verifyUser = async () => {
            console.log("[AuthContext] Verifying user session...");
            try {
                const res = await axios.get(`${API_URL}/auth/verify`);
                if (mounted && res.data.success) {
                    console.log("[AuthContext] User verified:", res.data.user);
                    setUser(res.data.user);
                } else {
                    console.log("[AuthContext] No valid session");
                    setUser(null);
                }
            } catch (error: any) {
                console.error("[AuthContext] Verification failed:", error.response?.data?.message || error.message);
                if (mounted) setUser(null);
            } finally {
                if (mounted) setLoading(false);
            }
        };

        verifyUser();

        return () => {
            mounted = false;
        };
    }, []);

    const signup = async (name: string, email: string, password: string): Promise<AuthResponse> => {
        console.log("[AuthContext] Initiating signup...");
        try {
            const res = await axios.post(`${API_URL}/auth/register`, {
                name, email, password
            });
            
            if (res.data.success) {
                console.log("[AuthContext] Signup successful");
                setUser(res.data.user);
                return {
                    success: true,
                    data: res.data
                };
            }
            return {
                success: false,
                error: res.data.message || "Signup failed"
            };
        } catch (error: any) {
            console.error("[AuthContext] Signup error:", error.response?.data || error.message);
            return {
                success: false,
                error: error.response?.data?.message || "Failed to create account"
            };
        }
    };

    const login = async (email: string, password: string): Promise<AuthResponse> => {
        console.log("[AuthContext] Initiating login...");
        try {
            const res = await axios.post(`${API_URL}/auth/login`, {
                email, password
            });
            
            if (res.data.success) {
                console.log("[AuthContext] Login successful");
                setUser(res.data.user);
                return {
                    success: true,
                    data: res.data
                };
            }
            return {
                success: false,
                error: "Login failed"
            };
        } catch (error: any) {
            console.error("[AuthContext] Login error:", error.response?.data || error.message);
            return {
                success: false,
                error: error.response?.data?.message || "Invalid credentials"
            };
        }
    };

    const logout = async (): Promise<AuthResponse> => {
        console.log("[AuthContext] Initiating logout...");
        try {
            const res = await axios.post(`${API_URL}/auth/logout`);
            if (res.data.success) {
                console.log("[AuthContext] Logout successful");
                setUser(null);
                window.location.href = '/signin';
                return {
                    success: true,
                    data: res.data
                };
            }
            return {
                success: false,
                error: "Logout failed"
            };
        } catch (error: any) {
            console.error("[AuthContext] Logout error:", error.response?.data || error.message);
            return {
                success: false,
                error: error.response?.data?.message || "Failed to logout"
            };
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use auth
export const useAuth = () => {
    console.log("[useAuth] Hook called");
    const context = useContext(AuthContext);
    if (!context) {
        console.error("[useAuth] No AuthContext found");
        throw new Error("useAuth must be used within an AuthProvider");
    }
    console.log("[useAuth] AuthContext found:", context);
    return context;
};
