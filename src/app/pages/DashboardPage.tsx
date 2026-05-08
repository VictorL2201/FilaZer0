import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  ShoppingCart,
  Users,
  CheckCircle,
  DollarSign,
  Clock,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stats = [
  {
    title: "Pedidos Ativos",
    value: "24",
    change: "+12%",
    icon: ShoppingCart,
    color: "text-blue-600",
    bgColor: "bg-blue-600/10",
  },
  {
    title: "Filas em Andamento",
    value: "8",
    change: "-5%",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-600/10",
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
    color: "text-emerald-600",
    bgColor: "bg-emerald-600/10",
  },
  {
    title: "Tempo Médio",
    value: "8 min",
    change: "-15%",
    icon: Clock,
    color: "text-orange-600",
    bgColor: "bg-orange-600/10",
  },
  {
    title: "Taxa de Sucesso",
    value: "96%",
    change: "+3%",
    icon: TrendingUp,
    color: "text-teal-600",
    bgColor: "bg-teal-600/10",
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
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <h3 className="text-3xl font-bold mt-2">{stat.value}</h3>
                    <Badge
                      variant={stat.change.startsWith("+") ? "default" : "secondary"}
                      className="mt-2"
                    >
                      {stat.change} vs semana anterior
                    </Badge>
                  </div>
                  <div className={`${stat.bgColor} ${stat.color} p-3 rounded-xl`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pedidos da Semana</CardTitle>
            <CardDescription>Total de pedidos por dia</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="pedidos" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Faturamento Semanal</CardTitle>
            <CardDescription>Receita em reais por dia</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="faturamento"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  dot={{ fill: "#8b5cf6", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Atividades Recentes</CardTitle>
          <CardDescription>Últimas ações do sistema em tempo real</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      activity.status === "success"
                        ? "bg-green-600"
                        : activity.status === "warning"
                        ? "bg-orange-600"
                        : "bg-blue-600"
                    }`}
                  />
                  <div>
                    <p className="font-medium">{activity.description}</p>
                    <p className="text-sm text-muted-foreground">{activity.type}</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{activity.time}</div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            Ver todas atividades
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
