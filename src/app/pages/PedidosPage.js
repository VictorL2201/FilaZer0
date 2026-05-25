import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "../components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "../components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, } from "../components/ui/alert-dialog";
import { Search, Filter, CheckCircle, XCircle, Clock, Edit, Trash2 } from "lucide-react";
import { toast } from "sonner";
const initialPedidos = [
    {
        id: "#1234",
        cliente: "João Silva",
        items: "2x Hambúrguer, 1x Refrigerante",
        valor: "R$ 45,00",
        status: "em-preparo",
        tempo: "5 min",
    },
    {
        id: "#1235",
        cliente: "Maria Santos",
        items: "1x Pizza Grande, 2x Suco",
        valor: "R$ 68,00",
        status: "aguardando",
        tempo: "2 min",
    },
    {
        id: "#1236",
        cliente: "Pedro Costa",
        items: "3x Pastel, 1x Café",
        valor: "R$ 22,00",
        status: "finalizado",
        tempo: "15 min",
    },
    {
        id: "#1237",
        cliente: "Ana Oliveira",
        items: "1x Salada Caesar, 1x Água",
        valor: "R$ 32,00",
        status: "em-preparo",
        tempo: "8 min",
    },
    {
        id: "#1238",
        cliente: "Carlos Almeida",
        items: "2x Açaí, 1x Vitamina",
        valor: "R$ 38,00",
        status: "aguardando",
        tempo: "1 min",
    },
    {
        id: "#1239",
        cliente: "Juliana Ferreira",
        items: "1x Combo Executivo",
        valor: "R$ 55,00",
        status: "cancelado",
        tempo: "10 min",
    },
];
const statusConfig = {
    aguardando: { label: "Aguardando", color: "bg-yellow-600", variant: "secondary" },
    "em-preparo": { label: "Em Preparo", color: "bg-orange-600", variant: "orange" },
    finalizado: { label: "Finalizado", color: "bg-green-600", variant: "green" },
    cancelado: { label: "Cancelado", color: "bg-red-600", variant: "destructive" },
};
export default function PedidosPage() {
    const [pedidos, setPedidos] = useState(initialPedidos);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("todos");
    const [editingPedido, setEditingPedido] = useState(null);
    const [deletingPedido, setDeletingPedido] = useState(null);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const filteredPedidos = pedidos.filter((pedido) => {
        const matchesSearch = pedido.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pedido.cliente.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "todos" || pedido.status === statusFilter;
        return matchesSearch && matchesStatus;
    });
    const handleEdit = (pedido) => {
        setEditingPedido({ ...pedido });
        setIsEditDialogOpen(true);
    };
    const handleSaveEdit = () => {
        if (editingPedido) {
            setPedidos((prev) => prev.map((p) => (p.id === editingPedido.id ? editingPedido : p)));
            toast.success("Pedido atualizado com sucesso!");
            setIsEditDialogOpen(false);
            setEditingPedido(null);
        }
    };
    const handleDelete = (pedido) => {
        setDeletingPedido(pedido);
    };
    const confirmDelete = () => {
        if (deletingPedido) {
            setPedidos((prev) => prev.filter((p) => p.id !== deletingPedido.id));
            toast.success("Pedido excluído com sucesso!");
            setDeletingPedido(null);
        }
    };
    const handleMarkAsComplete = (pedido) => {
        setPedidos((prev) => prev.map((p) => (p.id === pedido.id ? { ...p, status: "finalizado" } : p)));
        toast.success("Pedido marcado como finalizado!");
    };
    const handleCancel = (pedido) => {
        setPedidos((prev) => prev.map((p) => (p.id === pedido.id ? { ...p, status: "cancelado" } : p)));
        toast.success("Pedido cancelado!");
    };
    const stats = {
        aguardando: pedidos.filter((p) => p.status === "aguardando").length,
        emPreparo: pedidos.filter((p) => p.status === "em-preparo").length,
        finalizados: pedidos.filter((p) => p.status === "finalizado").length,
        cancelados: pedidos.filter((p) => p.status === "cancelado").length,
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [_jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground", children: "Aguardando" }), _jsx("h3", { className: "text-2xl font-bold mt-1", children: stats.aguardando })] }), _jsx("div", { className: "bg-[#FDB913]/10 text-[#FDB913] p-3 rounded-xl", children: _jsx(Clock, { className: "w-5 h-5" }) })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground", children: "Em Preparo" }), _jsx("h3", { className: "text-2xl font-bold mt-1", children: stats.emPreparo })] }), _jsx("div", { className: "bg-[#FD5F00] text-white p-3 rounded-xl", children: _jsx(Filter, { className: "w-5 h-5 text-white" }) })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground", children: "Finalizados" }), _jsx("h3", { className: "text-2xl font-bold mt-1", children: stats.finalizados })] }), _jsx("div", { className: "bg-green-600/10 text-green-600 p-3 rounded-xl", children: _jsx(CheckCircle, { className: "w-5 h-5" }) })] }) }) }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-muted-foreground", children: "Cancelados" }), _jsx("h3", { className: "text-2xl font-bold mt-1", children: stats.cancelados })] }), _jsx("div", { className: "bg-red-600/10 text-red-600 p-3 rounded-xl", children: _jsx(XCircle, { className: "w-5 h-5" }) })] }) }) })] }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Lista de Pedidos" }) }), _jsxs(CardContent, { children: [_jsxs("div", { className: "flex flex-col md:flex-row gap-4 mb-6", children: [_jsxs("div", { className: "relative flex-1", children: [_jsx(Search, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }), _jsx(Input, { placeholder: "Buscar por pedido ou cliente...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "pl-10" })] }), _jsxs(Select, { value: statusFilter, onValueChange: setStatusFilter, children: [_jsx(SelectTrigger, { className: "w-full md:w-[200px]", children: _jsx(SelectValue, { placeholder: "Filtrar por status" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "todos", children: "Todos" }), _jsx(SelectItem, { value: "aguardando", children: "Aguardando" }), _jsx(SelectItem, { value: "em-preparo", children: "Em Preparo" }), _jsx(SelectItem, { value: "finalizado", children: "Finalizado" }), _jsx(SelectItem, { value: "cancelado", children: "Cancelado" })] })] })] }), _jsx("div", { className: "rounded-lg border border-border overflow-hidden", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Pedido" }), _jsx(TableHead, { children: "Cliente" }), _jsx(TableHead, { children: "Itens" }), _jsx(TableHead, { children: "Valor" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Tempo" }), _jsx(TableHead, { className: "text-right", children: "A\u00E7\u00F5es" })] }) }), _jsx(TableBody, { children: filteredPedidos.map((pedido) => (_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: pedido.id }), _jsx(TableCell, { children: pedido.cliente }), _jsx(TableCell, { className: "max-w-[200px] truncate", children: pedido.items }), _jsx(TableCell, { children: pedido.valor }), _jsx(TableCell, { children: _jsx(Badge, { variant: statusConfig[pedido.status].variant, children: statusConfig[pedido.status].label }) }), _jsx(TableCell, { children: pedido.tempo }), _jsx(TableCell, { className: "text-right", children: _jsxs("div", { className: "flex gap-2 justify-end", children: [_jsx(Button, { size: "sm", variant: "outline", onClick: () => handleEdit(pedido), title: "Editar", children: _jsx(Edit, { className: "h-4 w-4" }) }), _jsx(Button, { size: "sm", variant: "outline", onClick: () => handleMarkAsComplete(pedido), disabled: pedido.status === "finalizado" || pedido.status === "cancelado", title: "Finalizar", children: _jsx(CheckCircle, { className: "h-4 w-4" }) }), _jsx(Button, { size: "sm", variant: "outline", onClick: () => handleCancel(pedido), disabled: pedido.status === "finalizado" || pedido.status === "cancelado", title: "Cancelar", children: _jsx(XCircle, { className: "h-4 w-4" }) }), _jsx(Button, { size: "sm", variant: "outline", onClick: () => handleDelete(pedido), title: "Excluir", children: _jsx(Trash2, { className: "h-4 w-4 text-red-600" }) })] }) })] }, pedido.id))) })] }) })] })] }), _jsx(Dialog, { open: isEditDialogOpen, onOpenChange: setIsEditDialogOpen, children: _jsxs(DialogContent, { children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Editar Pedido" }), _jsx(DialogDescription, { children: "Atualize as informa\u00E7\u00F5es do pedido" })] }), editingPedido && (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "edit-cliente", children: "Cliente" }), _jsx(Input, { id: "edit-cliente", value: editingPedido.cliente, onChange: (e) => setEditingPedido({ ...editingPedido, cliente: e.target.value }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "edit-items", children: "Itens" }), _jsx(Input, { id: "edit-items", value: editingPedido.items, onChange: (e) => setEditingPedido({ ...editingPedido, items: e.target.value }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "edit-valor", children: "Valor" }), _jsx(Input, { id: "edit-valor", value: editingPedido.valor, onChange: (e) => setEditingPedido({ ...editingPedido, valor: e.target.value }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "edit-status", children: "Status" }), _jsxs(Select, { value: editingPedido.status, onValueChange: (value) => setEditingPedido({ ...editingPedido, status: value }), children: [_jsx(SelectTrigger, { id: "edit-status", children: _jsx(SelectValue, {}) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "aguardando", children: "Aguardando" }), _jsx(SelectItem, { value: "em-preparo", children: "Em Preparo" }), _jsx(SelectItem, { value: "finalizado", children: "Finalizado" }), _jsx(SelectItem, { value: "cancelado", children: "Cancelado" })] })] })] })] })), _jsxs(DialogFooter, { children: [_jsx(Button, { variant: "outline", onClick: () => setIsEditDialogOpen(false), children: "Cancelar" }), _jsx(Button, { onClick: handleSaveEdit, children: "Salvar" })] })] }) }), _jsx(AlertDialog, { open: !!deletingPedido, onOpenChange: (open) => !open && setDeletingPedido(null), children: _jsxs(AlertDialogContent, { children: [_jsxs(AlertDialogHeader, { children: [_jsx(AlertDialogTitle, { children: "Confirmar Exclus\u00E3o" }), _jsxs(AlertDialogDescription, { children: ["Tem certeza que deseja excluir o pedido ", deletingPedido?.id, "? Esta a\u00E7\u00E3o n\u00E3o pode ser desfeita."] })] }), _jsxs(AlertDialogFooter, { children: [_jsx(AlertDialogCancel, { children: "Cancelar" }), _jsx(AlertDialogAction, { onClick: confirmDelete, children: "Excluir" })] })] }) })] }));
}
//# sourceMappingURL=PedidosPage.js.map