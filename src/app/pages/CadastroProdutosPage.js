import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "../components/ui/table";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, } from "../components/ui/alert-dialog";
import { Badge } from "../components/ui/badge";
import { PlusCircle, Edit, Trash2, Upload, Package } from "lucide-react";
import { toast } from "sonner";
const initialProdutos = [
    {
        id: "1",
        nome: "Hambúrguer Tradicional",
        descricao: "Hambúrguer artesanal com carne bovina",
        categoria: "alimentacao",
        preco: "25.00",
        estoque: 150,
    },
    {
        id: "2",
        nome: "Refrigerante 350ml",
        descricao: "Refrigerante gelado",
        categoria: "bebidas",
        preco: "8.00",
        estoque: 230,
    },
    {
        id: "3",
        nome: "Batata Frita",
        descricao: "Batata frita crocante",
        categoria: "alimentacao",
        preco: "15.00",
        estoque: 25,
    },
];
export default function CadastroProdutosPage() {
    const [produtos, setProdutos] = useState(initialProdutos);
    const [editingId, setEditingId] = useState(null);
    const [deletingProduto, setDeletingProduto] = useState(null);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [preco, setPreco] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const resetForm = () => {
        setNome("");
        setDescricao("");
        setCategoria("");
        setPreco("");
        setQuantidade("");
        setEditingId(null);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            setProdutos((prev) => prev.map((p) => p.id === editingId
                ? {
                    ...p,
                    nome,
                    descricao,
                    categoria,
                    preco,
                    estoque: parseInt(quantidade),
                }
                : p));
            toast.success("Produto atualizado com sucesso!");
        }
        else {
            const novoProduto = {
                id: Date.now().toString(),
                nome,
                descricao,
                categoria,
                preco,
                estoque: parseInt(quantidade),
            };
            setProdutos((prev) => [...prev, novoProduto]);
            toast.success("Produto adicionado com sucesso!");
        }
        resetForm();
    };
    const handleEdit = (produto) => {
        setEditingId(produto.id);
        setNome(produto.nome);
        setDescricao(produto.descricao || "");
        setCategoria(produto.categoria);
        setPreco(produto.preco);
        setQuantidade(produto.estoque.toString());
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const handleDelete = (produto) => {
        setDeletingProduto(produto);
    };
    const confirmDelete = () => {
        if (deletingProduto) {
            setProdutos((prev) => prev.filter((p) => p.id !== deletingProduto.id));
            toast.success("Produto excluído com sucesso!");
            setDeletingProduto(null);
        }
    };
    const getCategoriaLabel = (cat) => {
        const categorias = {
            alimentacao: "Alimentação",
            bebidas: "Bebidas",
            sobremesas: "Sobremesas",
            lanches: "Lanches",
            outros: "Outros",
        };
        return categorias[cat] || cat;
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsx("div", { className: "lg:col-span-2", children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: editingId ? "Editar Produto" : "Novo Produto" }), _jsx(CardDescription, { children: editingId
                                                ? "Atualize as informações do produto"
                                                : "Cadastre um novo produto no sistema" })] }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "nome", children: "Nome do Produto *" }), _jsx(Input, { id: "nome", placeholder: "Ex: Hamb\u00FArguer Artesanal", value: nome, onChange: (e) => setNome(e.target.value), required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "categoria", children: "Categoria *" }), _jsxs(Select, { value: categoria, onValueChange: setCategoria, required: true, children: [_jsx(SelectTrigger, { id: "categoria", children: _jsx(SelectValue, { placeholder: "Selecione a categoria" }) }), _jsxs(SelectContent, { children: [_jsx(SelectItem, { value: "alimentacao", children: "Alimenta\u00E7\u00E3o" }), _jsx(SelectItem, { value: "bebidas", children: "Bebidas" }), _jsx(SelectItem, { value: "sobremesas", children: "Sobremesas" }), _jsx(SelectItem, { value: "lanches", children: "Lanches" }), _jsx(SelectItem, { value: "outros", children: "Outros" })] })] })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "descricao", children: "Descri\u00E7\u00E3o" }), _jsx(Textarea, { id: "descricao", placeholder: "Descreva o produto...", rows: 3, value: descricao, onChange: (e) => setDescricao(e.target.value) })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "preco", children: "Pre\u00E7o (R$) *" }), _jsx(Input, { id: "preco", type: "number", step: "0.01", placeholder: "0,00", value: preco, onChange: (e) => setPreco(e.target.value), required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "quantidade", children: "Quantidade em Estoque *" }), _jsx(Input, { id: "quantidade", type: "number", placeholder: "0", value: quantidade, onChange: (e) => setQuantidade(e.target.value), required: true })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { htmlFor: "imagem", children: "Imagem do Produto" }), _jsxs("div", { className: "border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer", children: [_jsx(Upload, { className: "w-8 h-8 mx-auto mb-2 text-muted-foreground" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Clique para fazer upload ou arraste a imagem" }), _jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "PNG, JPG ou WEBP (max. 2MB)" })] })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx(Button, { type: "submit", className: "flex-1", children: editingId ? (_jsxs(_Fragment, { children: [_jsx(Edit, { className: "w-4 h-4 mr-2" }), "Atualizar Produto"] })) : (_jsxs(_Fragment, { children: [_jsx(PlusCircle, { className: "w-4 h-4 mr-2" }), "Adicionar Produto"] })) }), editingId && (_jsx(Button, { type: "button", variant: "outline", onClick: resetForm, children: "Cancelar Edi\u00E7\u00E3o" }))] })] }) })] }) }), _jsx("div", { children: _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Pr\u00E9-visualiza\u00E7\u00E3o" }), _jsx(CardDescription, { children: "Como o produto aparecer\u00E1" })] }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsx("div", { className: "aspect-square bg-muted rounded-lg flex items-center justify-center", children: _jsx(Package, { className: "w-16 h-16 text-muted-foreground" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-lg", children: nome || "Nome do Produto" }), _jsx("p", { className: "text-sm text-muted-foreground mt-1", children: descricao || "Descrição do produto aparecerá aqui..." }), _jsxs("div", { className: "flex items-center justify-between mt-3", children: [_jsx(Badge, { children: categoria || "Categoria" }), _jsx("span", { className: "text-lg font-bold", children: preco ? `R$ ${preco}` : "R$ 0,00" })] }), _jsxs("p", { className: "text-sm text-muted-foreground mt-2", children: ["Estoque: ", quantidade || "0", " unidades"] })] })] }) })] }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Produtos Cadastrados" }), _jsx(CardDescription, { children: "Gerencie os produtos existentes" })] }), _jsx(CardContent, { children: _jsx("div", { className: "rounded-lg border border-border overflow-hidden", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Produto" }), _jsx(TableHead, { children: "Categoria" }), _jsx(TableHead, { children: "Pre\u00E7o" }), _jsx(TableHead, { children: "Estoque" }), _jsx(TableHead, { className: "text-right", children: "A\u00E7\u00F5es" })] }) }), _jsx(TableBody, { children: produtos.map((produto) => (_jsxs(TableRow, { className: editingId === produto.id ? "bg-muted/50" : "", children: [_jsx(TableCell, { className: "font-medium", children: produto.nome }), _jsx(TableCell, { children: _jsx(Badge, { variant: "outline", children: getCategoriaLabel(produto.categoria) }) }), _jsxs(TableCell, { children: ["R$ ", parseFloat(produto.preco).toFixed(2)] }), _jsxs(TableCell, { children: [produto.estoque, " un"] }), _jsx(TableCell, { className: "text-right", children: _jsxs("div", { className: "flex gap-2 justify-end", children: [_jsx(Button, { size: "sm", variant: "outline", onClick: () => handleEdit(produto), title: "Editar", children: _jsx(Edit, { className: "h-4 w-4" }) }), _jsx(Button, { size: "sm", variant: "outline", onClick: () => handleDelete(produto), title: "Excluir", children: _jsx(Trash2, { className: "h-4 w-4 text-red-600" }) })] }) })] }, produto.id))) })] }) }) })] }), _jsx(AlertDialog, { open: !!deletingProduto, onOpenChange: (open) => !open && setDeletingProduto(null), children: _jsxs(AlertDialogContent, { children: [_jsxs(AlertDialogHeader, { children: [_jsx(AlertDialogTitle, { children: "Confirmar Exclus\u00E3o" }), _jsxs(AlertDialogDescription, { children: ["Tem certeza que deseja excluir o produto \"", deletingProduto?.nome, "\"? Esta a\u00E7\u00E3o n\u00E3o pode ser desfeita."] })] }), _jsxs(AlertDialogFooter, { children: [_jsx(AlertDialogCancel, { children: "Cancelar" }), _jsx(AlertDialogAction, { onClick: confirmDelete, children: "Excluir" })] })] }) })] }));
}
//# sourceMappingURL=CadastroProdutosPage.js.map