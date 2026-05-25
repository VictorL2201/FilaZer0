import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, ReactNode } from "react";
const AuthContext = createContext(undefined);
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const login = async (email, password) => {
        // Simulação de login
        await new Promise((resolve) => setTimeout(resolve, 500));
        setUser({
            id: "1",
            name: "Admin FilaZero",
            email,
            role: email.includes("admin") ? "admin" : "employee",
        });
    };
    const logout = () => {
        setUser(null);
    };
    return (_jsx(AuthContext.Provider, { value: { user, login, logout, isAuthenticated: !!user }, children: children }));
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error("useAuth must be used within AuthProvider");
    return context;
}
//# sourceMappingURL=AuthContext.js.map