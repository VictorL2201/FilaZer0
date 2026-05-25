import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ShoppingCart, Users, CheckCircle, DollarSign, Clock, TrendingUp, AlertCircle, } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";
const stats = [
    {
        title: "Pedidos Ativos",
        value: "24",
        change: "+12%",
        icon: ShoppingCart,
        color: "text-[#DC143C]",
        bgColor: "bg-[#DC143C]/10",
    },
    {
        title: "Filas em Andamento",
        value: "8",
        change: "-5%",
        icon: Users,
        color: "text-[#FDB913]",
        bgColor: "bg-[#FDB913]/10",
    },
    {
        title: "Concluídos Hoje",
        value: "142",
        change: "+18%",
        icon: CheckCircle,
        color: "text-green-600",
        bgColor: "bg-green-600/10",
    },
    {
        title: "Faturamento",
        value: "R$ 8.450",
        change: "+23%",
        icon: DollarSign,
        color: "text-[#DC143C]",
        bgColor: "bg-[#DC143C]/10",
    },
    {
        title: "Tempo Médio",
        value: "8 min",
        change: "-15%",
        icon: Clock,
        color: "text-[#FDB913]",
        bgColor: "bg-[#FDB913]/10",
    },
    {
        title: "Taxa de Sucesso",
        value: "96%",
        change: "+3%",
        icon: TrendingUp,
        color: "text-green-600",
        bgColor: "bg-green-600/10",
    },
];
const chartData = [
    { name: "Seg", pedidos: 65, faturamento: 2400 },
    { name: "Ter", pedidos: 78, faturamento: 3200 },
    { name: "Qua", pedidos: 90, faturamento: 4100 },
    { name: "Qui", pedidos: 81, faturamento: 3800 },
    { name: "Sex", pedidos: 95, faturamento: 4500 },
    { name: "Sáb", pedidos: 110, faturamento: 5200 },
    { name: "Dom", pedidos: 85, faturamento: 3900 },
];
const recentActivity = [
    {
        id: "1",
        type: "Pedido",
        description: "Pedido #1234 concluído",
        time: "2 min atrás",
        status: "success",
    },
    {
        id: "2",
        type: "Fila",
        description: "Nova fila criada: Balcão 3",
        time: "5 min atrás",
        status: "info",
    },
    {
        id: "3",
        type: "Alerta",
        description: "Estoque baixo: Produto X",
        time: "12 min atrás",
        status: "warning",
    },
    {
        id: "4",
        type: "Pagamento",
        description: "Recebimento de R$ 450,00",
        time: "18 min atrás",
        status: "success",
    },
    {
        id: "5",
        type: "Pedido",
        description: "Pedido #1235 em preparo",
        time: "25 min atrás",
        status: "info",
    },
];
export default function DashboardPage() {
    return (_jsxs("div", { className: "space-y-6", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: stats.map((stat) => {
                    const Icon = stat.icon;
                    return (_jsx(Card, { className: "hover:shadow-lg transition-shadow", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-start justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground", children: stat.title }), _jsx("h3", { className: "text-3xl font-bold mt-2", children: stat.value }), _jsxs(Badge, { variant: stat.change.startsWith("+") ? "default" : "secondary", className: "mt-2", children: [stat.change, " vs semana anterior"] })] }), _jsx("div", { className: `${stat.bgColor} ${stat.color} p-3 rounded-xl`, children: _jsx(Icon, { className: "w-6 h-6" }) })] }) }) }, stat.title));
                }) }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Pedidos da Semana" }), _jsx(CardDescription, { children: "Total de pedidos por dia" })] }), _jsx(CardContent, { children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(BarChart, { data: chartData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", className: "stroke-muted" }), _jsx(XAxis, { dataKey: "name", className: "text-xs" }), _jsx(YAxis, { className: "text-xs" }), _jsx(Tooltip, { contentStyle: {
                                                    backgroundColor: "hsl(var(--card))",
                                                    border: "1px solid hsl(var(--border))",
                                                    borderRadius: "8px",
                                                } }), _jsx(Bar, { dataKey: "pedidos", fill: "#DC143C", radius: [8, 8, 0, 0] })] }) }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Faturamento Semanal" }), _jsx(CardDescription, { children: "Receita em reais por dia" })] }), _jsx(CardContent, { children: _jsx(ResponsiveContainer, { width: "100%", height: 300, children: _jsxs(LineChart, { data: chartData, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3", className: "stroke-muted" }), _jsx(XAxis, { dataKey: "name", className: "text-xs" }), _jsx(YAxis, { className: "text-xs" }), _jsx(Tooltip, { contentStyle: {
                                                    backgroundColor: "hsl(var(--card))",
                                                    border: "1px solid hsl(var(--border))",
                                                    borderRadius: "8px",
                                                } }), _jsx(Line, { type: "monotone", dataKey: "faturamento", stroke: "#FDB913", strokeWidth: 3, dot: { fill: "#FDB913", r: 4 } })] }) }) })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Atividades Recentes" }), _jsx(CardDescription, { children: "\u00DAltimas a\u00E7\u00F5es do sistema em tempo real" })] }), _jsxs(CardContent, { children: [_jsx("div", { className: "space-y-4", children: recentActivity.map((activity) => (_jsxs("div", { className: "flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: `w-2 h-2 rounded-full ${activity.status === "success"
                                                        ? "bg-green-600"
                                                        : activity.status === "warning"
                                                            ? "bg-orange-600"
                                                            : "bg-blue-600"}` }), _jsxs("div", { children: [_jsx("p", { className: "font-medium", children: activity.description }), _jsx("p", { className: "text-sm text-muted-foreground", children: activity.type })] })] }), _jsx("div", { className: "text-sm text-muted-foreground", children: activity.time })] }, activity.id))) }), _jsx(Button, { variant: "outline", className: "w-full mt-4", children: "Ver todas atividades" })] })] })] }));
}
//# sourceMappingURL=DashboardPage.js.map