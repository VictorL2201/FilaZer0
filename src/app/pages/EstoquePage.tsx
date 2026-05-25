import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
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

  const filteredProdutos = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const produtosEmFalta = produtos.filter((p) => p.quantidade < p.minimo).length;
  const produtosTotal = produtos.length;
  const quantidadeTotal = produtos.reduce((acc, p) => acc + p.quantidade, 0);

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Produtos</p>
                <h3 className="text-2xl font-bold mt-1">{produtosTotal}</h3>
              </div>
              <div className="bg-[#DC143C]/10 text-[#DC143C] p-3 rounded-xl">
                <Package className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Estoque Baixo</p>
                <h3 className="text-2xl font-bold mt-1">{produtosEmFalta}</h3>
              </div>
              <div className="bg-[#FDB913]/10 text-[#FDB913] p-3 rounded-xl">
                <AlertTriangle className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Itens em Estoque</p>
                <h3 className="text-2xl font-bold mt-1">{quantidadeTotal}</h3>
              </div>
              <div className="bg-green-600/10 text-green-600 p-3 rounded-xl">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Valor Total</p>
                <h3 className="text-2xl font-bold mt-1">R$ 100k</h3>
              </div>
              <div className="bg-[#DC143C]/10 text-[#DC143C] p-3 rounded-xl">
                <ArrowUpDown className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      {produtosEmFalta > 0 && (
        <Card className="border-[#FDB913]/50 bg-[#FDB913]/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-[#FDB913]" />
              <div>
                <p className="font-medium text-[#FDB913]">
                  Atenção: {produtosEmFalta} produto(s) com estoque baixo
                </p>
                <p className="text-sm text-muted-foreground">
                  Verifique os itens destacados e realize a reposição
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Product List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Controle de Estoque</CardTitle>
              <CardDescription>Gerencie todos os produtos em estoque</CardDescription>
            </div>
            <Button>
              <Package className="w-4 h-4 mr-2" />
              Nova Entrada
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar produto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produto</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Quantidade</TableHead>
                  <TableHead>Estoque Mínimo</TableHead>
                  <TableHead>Valor Unitário</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProdutos.map((produto) => {
                  const isLowStock = produto.quantidade < produto.minimo;
                  return (
                    <TableRow key={produto.id}>
                      <TableCell className="font-medium">{produto.nome}</TableCell>
                      <TableCell>{produto.categoria}</TableCell>
                      <TableCell>
                        <span
                          className={isLowStock ? "text-[#FDB913] font-medium" : ""}
                        >
                          {produto.quantidade} {produto.unidade}
                        </span>
                      </TableCell>
                      <TableCell>
                        {produto.minimo} {produto.unidade}
                      </TableCell>
                      <TableCell>{produto.valor}</TableCell>
                      <TableCell>
                        <Badge
                          variant={isLowStock ? "destructive" : "default"}
                          className={isLowStock ? "bg-[#FDB913] hover:bg-[#FDB913]/90" : "bg-green-600"}
                        >
                          {isLowStock ? "Estoque Baixo" : "Normal"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button size="sm" variant="outline">
                            Entrada
                          </Button>
                          <Button size="sm" variant="outline">
                            Saída
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
