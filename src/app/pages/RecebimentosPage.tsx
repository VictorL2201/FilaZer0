import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  Download,
  CreditCard,
  Wallet,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const financeData = [
  { date: "01/05", receita: 4200, despesas: 1800 },
  { date: "02/05", receita: 5100, despesas: 2100 },
  { date: "03/05", receita: 4800, despesas: 1950 },
  { date: "04/05", receita: 6200, despesas: 2300 },
  { date: "05/05", receita: 5900, despesas: 2200 },
  { date: "06/05", receita: 7100, despesas: 2500 },
  { date: "07/05", receita: 6800, despesas: 2400 },
];

const transactions = [
  {
    id: "1",
    date: "08/05/2026",
    description: "Vendas do dia",
    type: "Entrada",
    method: "Cartão",
    amount: 8450.0,
  },
  {
    id: "2",
    date: "08/05/2026",
    description: "Fornecedor - Matéria Prima",
    type: "Saída",
    method: "Transferência",
    amount: -2300.0,
  },
  {
    id: "3",
    date: "07/05/2026",
    description: "Vendas do dia",
    type: "Entrada",
    method: "Dinheiro",
    amount: 6800.0,
  },
  {
    id: "4",
    date: "07/05/2026",
    description: "Energia elétrica",
    type: "Saída",
    method: "Débito",
    amount: -450.0,
  },
  {
    id: "5",
    date: "06/05/2026",
    description: "Vendas do dia",
    type: "Entrada",
    method: "Pix",
    amount: 7100.0,
  },
];

export default function RecebimentosPage() {
  const [period, setPeriod] = useState("dia");

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Receita Hoje</p>
                <h3 className="text-2xl font-bold mt-1">R$ 8.450</h3>
                <Badge className="mt-2">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +23%
                </Badge>
              </div>
              <div className="bg-green-600/10 text-green-600 p-3 rounded-xl">
                <DollarSign className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Receita Semanal</p>
                <h3 className="text-2xl font-bold mt-1">R$ 45.200</h3>
                <Badge variant="secondary" className="mt-2">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +18%
                </Badge>
              </div>
              <div className="bg-blue-600/10 text-blue-600 p-3 rounded-xl">
                <Calendar className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Receita Mensal</p>
                <h3 className="text-2xl font-bold mt-1">R$ 182.500</h3>
                <Badge className="mt-2">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +15%
                </Badge>
              </div>
              <div className="bg-purple-600/10 text-purple-600 p-3 rounded-xl">
                <Wallet className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Lucro Mensal</p>
                <h3 className="text-2xl font-bold mt-1">R$ 125.800</h3>
                <Badge variant="secondary" className="mt-2">
                  <TrendingDown className="w-3 h-3 mr-1" />
                  -3%
                </Badge>
              </div>
              <div className="bg-emerald-600/10 text-emerald-600 p-3 rounded-xl">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Fluxo de Caixa</CardTitle>
              <CardDescription>Receitas e despesas dos últimos 7 dias</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={financeData}>
              <defs>
                <linearGradient id="colorReceita" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorDespesas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="date" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="receita"
                stroke="#10b981"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorReceita)"
              />
              <Area
                type="monotone"
                dataKey="despesas"
                stroke="#ef4444"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorDespesas)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Transações</CardTitle>
          <CardDescription>Registro completo de movimentações financeiras</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={period} onValueChange={setPeriod}>
            <TabsList className="mb-4">
              <TabsTrigger value="dia">Dia</TabsTrigger>
              <TabsTrigger value="semana">Semana</TabsTrigger>
              <TabsTrigger value="mes">Mês</TabsTrigger>
            </TabsList>
            <TabsContent value={period}>
              <div className="rounded-lg border border-border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data</TableHead>
                      <TableHead>Descrição</TableHead>
                      <TableHead>Tipo</TableHead>
                      <TableHead>Método</TableHead>
                      <TableHead className="text-right">Valor</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              transaction.type === "Entrada" ? "default" : "secondary"
                            }
                          >
                            {transaction.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-muted-foreground" />
                            {transaction.method}
                          </div>
                        </TableCell>
                        <TableCell
                          className={`text-right font-medium ${
                            transaction.amount > 0
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {transaction.amount > 0 ? "+" : ""}
                          {transaction.amount.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
