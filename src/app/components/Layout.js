import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { FilaZeroLogo } from "./FilaZeroLogo";
import { LayoutDashboard, ShoppingCart, Package, PlusCircle, Moon, Sun, LogOut, Bell, } from "lucide-react";
const menuItems = [
    { path: "/pedidos", label: "Pedidos", icon: ShoppingCart },
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/estoque", label: "Estoque", icon: Package },
    { path: "/cadastro-produtos", label: "Cadastro", icon: PlusCircle },
];
export default function Layout() {
    const { user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsxs("aside", { className: "fixed left-0 top-0 h-screen w-64 bg-card border-r border-border flex flex-col", children: [_jsx("div", { className: "p-6 border-b border-border", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(FilaZeroLogo, { variant: "icon", style: { height: "40px" } }), _jsx("div", { children: _jsx("p", { className: "text-xs text-muted-foreground", children: "Gest\u00E3o Inteligente" }) })] }) }), _jsx("nav", { className: "flex-1 p-4 space-y-2", children: menuItems.map((item) => {
                            if (item.adminOnly && user?.role !== "admin")
                                return null;
                            const isActive = location.pathname === item.path;
                            const Icon = item.icon;
                            return (_jsx(Link, { to: item.path, children: _jsxs(Button, { variant: isActive ? "secondary" : "ghost", className: `w-full justify-start ${isActive ? "bg-primary/10 text-primary" : ""}`, children: [_jsx(Icon, { className: "mr-3 h-5 w-5" }), item.label] }) }, item.path));
                        }) }), _jsxs("div", { className: "p-4 border-t border-border space-y-3", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Avatar, { children: _jsx(AvatarFallback, { className: "bg-gradient-to-br from-[#DC143C] to-[#FDB913] text-white", children: user?.name.charAt(0) }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: "text-sm font-medium truncate", children: user?.name }), _jsx("p", { className: "text-xs text-muted-foreground truncate", children: user?.email })] })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: toggleTheme, className: "flex-1", children: theme === "dark" ? (_jsx(Sun, { className: "h-4 w-4" })) : (_jsx(Moon, { className: "h-4 w-4" })) }), _jsx(Button, { variant: "outline", size: "sm", onClick: logout, className: "flex-1", children: _jsx(LogOut, { className: "h-4 w-4" }) })] })] })] }), _jsxs("div", { className: "ml-64", children: [_jsx("header", { className: "sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border", children: _jsxs("div", { className: "flex items-center justify-between p-4", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold text-foreground", children: menuItems.find((item) => item.path === location.pathname)?.label || "Dashboard" }), _jsx("p", { className: "text-sm text-muted-foreground", children: user?.role === "admin" ? "Administrador" : "Funcionário" })] }), _jsx("div", { className: "flex items-center gap-3", children: _jsxs(Button, { variant: "outline", size: "icon", className: "relative", children: [_jsx(Bell, { className: "h-5 w-5" }), _jsx(Badge, { className: "absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs", children: "3" })] }) })] }) }), _jsx("main", { className: "p-6", children: _jsx(Outlet, {}) })] })] }));
}
//# sourceMappingURL=Layout.js.map