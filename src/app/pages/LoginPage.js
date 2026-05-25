import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { FilaZeroLogo } from "../components/FilaZeroLogo";
import { Lock, Mail } from "lucide-react";
export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await login(email, password);
            navigate("/dashboard");
        }
        catch (error) {
            console.error("Login error:", error);
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsxs("div", { className: "min-h-screen grid lg:grid-cols-2", children: [_jsx("div", { className: "flex items-center justify-center p-8 bg-background", children: _jsxs(Card, { className: "w-full max-w-md border-border/50 shadow-xl", children: [_jsxs(CardHeader, { className: "space-y-4 text-center", children: [_jsx("div", { className: "mx-auto flex justify-center", children: _jsx(FilaZeroLogo, { variant: "text", style: { height: "80px" } }) }), _jsx(CardDescription, { className: "text-base", children: "Sistema inteligente de gerenciamento de filas e pedidos" })] }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "email", children: "E-mail" }), _jsxs("div", { className: "relative", children: [_jsx(Mail, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }), _jsx(Input, { id: "email", type: "email", placeholder: "seu@email.com", value: email, onChange: (e) => setEmail(e.target.value), required: true, className: "pl-10" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "password", children: "Senha" }), _jsxs("div", { className: "relative", children: [_jsx(Lock, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }), _jsx(Input, { id: "password", type: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", value: password, onChange: (e) => setPassword(e.target.value), required: true, className: "pl-10" })] })] }), _jsx(Button, { type: "submit", className: "w-full", disabled: isLoading, children: isLoading ? "Entrando..." : "Entrar" }), _jsx("div", { className: "text-center text-sm text-muted-foreground", children: _jsx("a", { href: "#", className: "hover:text-primary transition-colors", children: "Esqueci minha senha" }) }), _jsx(Button, { type: "button", variant: "outline", className: "w-full", children: "Criar conta" })] }) })] }) }), _jsxs("div", { className: "hidden lg:flex items-center justify-center p-8 bg-gradient-to-br from-[#DC143C] via-[#8B0000] to-[#FDB913] relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" }), _jsxs("div", { className: "relative z-10 text-center space-y-6 max-w-lg text-white", children: [_jsx("div", { className: "flex justify-center", children: _jsx(FilaZeroLogo, { variant: "icon", style: { height: "100px" } }) }), _jsx("h2", { className: "text-4xl font-bold", children: "Bem-vindo ao FilaZero" }), _jsx("p", { className: "text-lg text-white/90", children: "Otimize seu atendimento, gerencie pedidos em tempo real e aumente a satisfa\u00E7\u00E3o dos seus clientes com tecnologia de ponta." }), _jsxs("div", { className: "grid grid-cols-3 gap-4 pt-6", children: [_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-4", children: [_jsx("div", { className: "text-2xl font-bold text-[#FDB913]", children: "98%" }), _jsx("div", { className: "text-sm text-white/80", children: "Satisfa\u00E7\u00E3o" })] }), _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-4", children: [_jsx("div", { className: "text-2xl font-bold text-[#FDB913]", children: "-50%" }), _jsx("div", { className: "text-sm text-white/80", children: "Tempo de espera" })] }), _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-4", children: [_jsx("div", { className: "text-2xl font-bold text-[#FDB913]", children: "+35%" }), _jsx("div", { className: "text-sm text-white/80", children: "Efici\u00EAncia" })] })] })] })] })] }));
}
//# sourceMappingURL=LoginPage.js.map