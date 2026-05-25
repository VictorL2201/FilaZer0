import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "../components/ui/table";
import { Search, Package, AlertTriangle, TrendingUp, ArrowUpDown } from "lucide-react";
const produtos = [
    {
        id: "1",
        nome: "Hambúrguer Tradicional",
        categoria: "Alimentação",
        quantidade: 150,
        minimo: 50,
        unidade: "un",
        valor: "R$ 8,50",
    },
    {
        id: "2",
        nome: "Refrigerante 350ml",
        categoria: "Bebidas",
        quantidade: 230,
        minimo: 100,
        unidade: "un",
        valor: "R$ 4,00",
    },
    {
        id: "3",
        nome: "Batata Frita",
        categoria: "Alimentação",
        quantidade: 25,
        minimo: 30,
        unidade: "kg",
        valor: "R$ 12,00",
    },
    {
        id: "4",
        nome: "Pizza Margherita",
        categoria: "Alimentação",
        quantidade: 45,
        minimo: 20,
        unidade: "un",
        valor: "R$ 35,00",
    },
    {
        id: "5",
        nome: "Suco Natural",
        categoria: "Bebidas",
        quantidade: 15,
        minimo: 25,
        unidade: "L",
        valor: "R$ 8,00",
    },
    {
        id: "6",
        nome: "Pastel Assado",
        categoria: "Alimentação",
        quantidade: 80,
        minimo: 40,
        unidade: "un",
        valor: "R$ 6,50",
    },
    {
        id: "7",
        nome: "Café Espresso",
        categoria: "Bebidas",
        quantidade: 5,
        minimo: 10,
        unidade: "kg",
        valor: "R$ 45,00",
    },
    {
        id: "8",
        nome: "Açaí 500ml",
        categoria: "Sobremesas",
        quantidade: 120,
        minimo: 50,
        unidade: "un",
        valor: "R$ 18,00",
    },
];
export default function EstoquePage() {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredProdutos = produtos.filter((produto) => produto.nome.toLowerCase().includes(searchTerm.toLowerCase()));
    const produtosEmFalta = produtos.filter((p) => p.quantidade < p.minimo).length;
    const produtosTotal = produtos.length;
    const quantidadeTotal = produtos.reduce((acc, p) => acc + p.quantidade, 0);
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [_jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground", children: "Total Produtos" }), _jsx("h3", { className: "text-2xl font-bold mt-1", children: produtosTotal })] }), _jsx("div", { className: "bg-[#DC143C]/10 text-[#DC143C] p-3 rounded-xl", children: _jsx(Package, { className: "w-5 h-5" }) })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground", children: "Estoque Baixo" }), _jsx("h3", { className: "text-2xl font-bold mt-1", children: produtosEmFalta })] }), _jsx("div", { className: "bg-[#FDB913]/10 text-[#FDB913] p-3 rounded-xl", children: _jsx(AlertTriangle, { className: "w-5 h-5" }) })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground", children: "Itens em Estoque" }), _jsx("h3", { className: "text-2xl font-bold mt-1", children: quantidadeTotal })] }), _jsx("div", { className: "bg-green-600/10 text-green-600 p-3 rounded-xl", children: _jsx(TrendingUp, { className: "w-5 h-5" }) })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground", children: "Valor Total" }), _jsx("h3", { className: "text-2xl font-bold mt-1", children: "R$ 15.8k" })] }), _jsx("div", { className: "bg-[#DC143C]/10 text-[#DC143C] p-3 rounded-xl", children: _jsx(ArrowUpDown, { className: "w-5 h-5" }) })] }) }) })] }), produtosEmFalta > 0 && (_jsx(Card, { className: "border-[#FDB913]/50 bg-[#FDB913]/5", children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(AlertTriangle, { className: "w-5 h-5 text-[#FDB913]" }), _jsxs("div", { children: [_jsxs("p", { className: "font-medium text-[#FDB913]", children: ["Aten\u00E7\u00E3o: ", produtosEmFalta, " produto(s) com estoque baixo"] }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Verifique os itens destacados e realize a reposi\u00E7\u00E3o" })] })] }) }) })), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx(CardTitle, { children: "Controle de Estoque" }), _jsx(CardDescription, { children: "Gerencie todos os produtos em estoque" })] }), _jsxs(Button, { children: [_jsx(Package, { className: "w-4 h-4 mr-2" }), "Nova Entrada"] })] }) }), _jsxs(CardContent, { children: [_jsx("div", { className: "mb-6", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }), _jsx(Input, { placeholder: "Buscar produto...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "pl-10" })] }) }), _jsx("div", { className: "rounded-lg border border-border overflow-hidden", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Produto" }), _jsx(TableHead, { children: "Categoria" }), _jsx(TableHead, { children: "Quantidade" }), _jsx(TableHead, { children: "Estoque M\u00EDnimo" }), _jsx(TableHead, { children: "Valor Unit\u00E1rio" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { className: "text-right", children: "A\u00E7\u00F5es" })] }) }), _jsx(TableBody, { children: filteredProdutos.map((produto) => {
                                                const isLowStock = produto.quantidade < produto.minimo;
                                                return (_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: produto.nome }), _jsx(TableCell, { children: produto.categoria }), _jsx(TableCell, { children: _jsxs("span", { className: isLowStock ? "text-[#FDB913] font-medium" : "", children: [produto.quantidade, " ", produto.unidade] }) }), _jsxs(TableCell, { children: [produto.minimo, " ", produto.unidade] }), _jsx(TableCell, { children: produto.valor }), _jsx(TableCell, { children: _jsx(Badge, { variant: isLowStock ? "destructive" : "default", className: isLowStock ? "bg-[#FDB913] hover:bg-[#FDB913]/90" : "bg-green-600", children: isLowStock ? "Estoque Baixo" : "Normal" }) }), _jsx(TableCell, { className: "text-right", children: _jsxs("div", { className: "flex gap-2 justify-end", children: [_jsx(Button, { size: "sm", variant: "outline", children: "Entrada" }), _jsx(Button, { size: "sm", variant: "outline", children: "Sa\u00EDda" })] }) })] }, produto.id));
                                            }) })] }) })] })] })] }));
}
//# sourceMappingURL=EstoquePage.js.map