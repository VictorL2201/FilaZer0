import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
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
import { Search, Filter, CheckCircle, XCircle, Clock, Edit } from "lucide-react";

const pedidos = [
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
  aguardando: { label: "Aguardando", color: "bg-yellow-600", variant: "secondary" as const },
  "em-preparo": { label: "Em Preparo", color: "bg-blue-600", variant: "default" as const },
  finalizado: { label: "Finalizado", color: "bg-green-600", variant: "default" as const },
  cancelado: { label: "Cancelado", color: "bg-red-600", variant: "destructive" as const },
};

export default function PedidosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("todos");

  const filteredPedidos = pedidos.filter((pedido) => {
    const matchesSearch =
      pedido.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pedido.cliente.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "todos" || pedido.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Aguardando</p>
                <h3 className="text-2xl font-bold mt-1">8</h3>
              </div>
              <div className="bg-yellow-600/10 text-yellow-600 p-3 rounded-xl">
                <Clock className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Em Preparo</p>
                <h3 className="text-2xl font-bold mt-1">12</h3>
              </div>
              <div className="bg-blue-600/10 text-blue-600 p-3 rounded-xl">
                <Filter className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Finalizados</p>
                <h3 className="text-2xl font-bold mt-1">142</h3>
              </div>
              <div className="bg-green-600/10 text-green-600 p-3 rounded-xl">
                <CheckCircle className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Cancelados</p>
                <h3 className="text-2xl font-bold mt-1">3</h3>
              </div>
              <div className="bg-red-600/10 text-red-600 p-3 rounded-xl">
                <XCircle className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Pedidos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por pedido ou cliente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filtrar por status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="aguardando">Aguardando</SelectItem>
                <SelectItem value="em-preparo">Em Preparo</SelectItem>
                <SelectItem value="finalizado">Finalizado</SelectItem>
                <SelectItem value="cancelado">Cancelado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Table */}
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pedido</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Itens</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Tempo</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPedidos.map((pedido) => (
                  <TableRow key={pedido.id}>
                    <TableCell className="font-medium">{pedido.id}</TableCell>
                    <TableCell>{pedido.cliente}</TableCell>
                    <TableCell className="max-w-[200px] truncate">{pedido.items}</TableCell>
                    <TableCell>{pedido.valor}</TableCell>
                    <TableCell>
                      <Badge variant={statusConfig[pedido.status as keyof typeof statusConfig].variant}>
                        {statusConfig[pedido.status as keyof typeof statusConfig].label}
                      </Badge>
                    </TableCell>
                    <TableCell>{pedido.tempo}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <XCircle className="h-4 w-4" />
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
    </div>
  );
}
