import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Toaster } from "./components/ui/sonner";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import PedidosPage from "./pages/PedidosPage";
import EstoquePage from "./pages/EstoquePage";
import CadastroProdutosPage from "./pages/CadastroProdutosPage";
function PrivateRoute({ children, }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? (_jsx(_Fragment, { children: children })) : (_jsx(Navigate, { to: "/login" }));
}
function AppRoutes() {
    const { isAuthenticated } = useAuth();
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: isAuthenticated ? (_jsx(Navigate, { to: "/pedidos" })) : (_jsx(LoginPage, {})) }), _jsxs(Route, { path: "/", element: _jsx(PrivateRoute, { children: _jsx(Layout, {}) }), children: [_jsx(Route, { index: true, element: _jsx(Navigate, { to: "/pedidos" }) }), _jsx(Route, { path: "pedidos", element: _jsx(PedidosPage, {}) }), _jsx(Route, { path: "dashboard", element: _jsx(DashboardPage, {}) }), _jsx(Route, { path: "estoque", element: _jsx(EstoquePage, {}) }), _jsx(Route, { path: "cadastro-produtos", element: _jsx(CadastroProdutosPage, {}) })] })] }));
}
export default function App() {
    return (_jsx(BrowserRouter, { children: _jsx(ThemeProvider, { children: _jsxs(AuthProvider, { children: [_jsx(AppRoutes, {}), _jsx(Toaster, {})] }) }) }));
}
//# sourceMappingURL=App.js.map