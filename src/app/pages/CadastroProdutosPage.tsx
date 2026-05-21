import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../components/ui/alert-dialog";
import { Badge } from "../components/ui/badge";
import { PlusCircle, Edit, Trash2, Upload, Package } from "lucide-react";
import { toast } from "sonner";

interface Produto {
  id: string;
  nome: string;
  descricao?: string;
  categoria: string;
  preco: string;
  estoque: number;
}

const initialProdutos: Produto[] = [
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
  const [produtos, setProdutos] = useState<Produto[]>(initialProdutos);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deletingProduto, setDeletingProduto] = useState<Produto | null>(null);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      setProdutos((prev) =>
        prev.map((p) =>
          p.id === editingId
            ? {
                ...p,
                nome,
                descricao,
                categoria,
                preco,
                estoque: parseInt(quantidade),
              }
            : p
        )
      );
      toast.success("Produto atualizado com sucesso!");
    } else {
      const novoProduto: Produto = {
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

  const handleEdit = (produto: Produto) => {
    setEditingId(produto.id);
    setNome(produto.nome);
    setDescricao(produto.descricao || "");
    setCategoria(produto.categoria);
    setPreco(produto.preco);
    setQuantidade(produto.estoque.toString());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (produto: Produto) => {
    setDeletingProduto(produto);
  };

  const confirmDelete = () => {
    if (deletingProduto) {
      setProdutos((prev) => prev.filter((p) => p.id !== deletingProduto.id));
      toast.success("Produto excluído com sucesso!");
      setDeletingProduto(null);
    }
  };

  const getCategoriaLabel = (cat: string) => {
    const categorias: Record<string, string> = {
      alimentacao: "Alimentação",
      bebidas: "Bebidas",
      sobremesas: "Sobremesas",
      lanches: "Lanches",
      outros: "Outros",
    };
    return categorias[cat] || cat;
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>{editingId ? "Editar Produto" : "Novo Produto"}</CardTitle>
              <CardDescription>
                {editingId
                  ? "Atualize as informações do produto"
                  : "Cadastre um novo produto no sistema"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome do Produto *</Label>
                    <Input
                      id="nome"
                      placeholder="Ex: Hambúrguer Artesanal"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="categoria">Categoria *</Label>
                    <Select value={categoria} onValueChange={setCategoria} required>
                      <SelectTrigger id="categoria">
                        <SelectValue placeholder="Selecione a categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alimentacao">Alimentação</SelectItem>
                        <SelectItem value="bebidas">Bebidas</SelectItem>
                        <SelectItem value="sobremesas">Sobremesas</SelectItem>
                        <SelectItem value="lanches">Lanches</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descricao">Descrição</Label>
                  <Textarea
                    id="descricao"
                    placeholder="Descreva o produto..."
                    rows={3}
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preco">Preço (R$) *</Label>
                    <Input
                      id="preco"
                      type="number"
                      step="0.01"
                      placeholder="0,00"
                      value={preco}
                      onChange={(e) => setPreco(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantidade">Quantidade em Estoque *</Label>
                    <Input
                      id="quantidade"
                      type="number"
                      placeholder="0"
                      value={quantidade}
                      onChange={(e) => setQuantidade(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="imagem">Imagem do Produto</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Clique para fazer upload ou arraste a imagem
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PNG, JPG ou WEBP (max. 2MB)
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button type="submit" className="flex-1">
                    {editingId ? (
                      <>
                        <Edit className="w-4 h-4 mr-2" />
                        Atualizar Produto
                      </>
                    ) : (
                      <>
                        <PlusCircle className="w-4 h-4 mr-2" />
                        Adicionar Produto
                      </>
                    )}
                  </Button>
                  {editingId && (
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancelar Edição
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Preview */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Pré-visualização</CardTitle>
              <CardDescription>Como o produto aparecerá</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <Package className="w-16 h-16 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    {nome || "Nome do Produto"}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {descricao || "Descrição do produto aparecerá aqui..."}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <Badge>{categoria || "Categoria"}</Badge>
                    <span className="text-lg font-bold">
                      {preco ? `R$ ${preco}` : "R$ 0,00"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Estoque: {quantidade || "0"} unidades
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Product List */}
      <Card>
        <CardHeader>
          <CardTitle>Produtos Cadastrados</CardTitle>
          <CardDescription>Gerencie os produtos existentes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produto</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead>Estoque</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {produtos.map((produto) => (
                  <TableRow
                    key={produto.id}
                    className={editingId === produto.id ? "bg-muted/50" : ""}
                  >
                    <TableCell className="font-medium">{produto.nome}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{getCategoriaLabel(produto.categoria)}</Badge>
                    </TableCell>
                    <TableCell>R$ {parseFloat(produto.preco).toFixed(2)}</TableCell>
                    <TableCell>{produto.estoque} un</TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(produto)}
                          title="Editar"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(produto)}
                          title="Excluir"
                        >
                          <Trash2 className="h-4 w-4 text-red-600" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Delete Confirmation */}
      <AlertDialog
        open={!!deletingProduto}
        onOpenChange={(open) => !open && setDeletingProduto(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir o produto "{deletingProduto?.nome}"? Esta
              ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete}>Excluir</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
