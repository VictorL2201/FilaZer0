import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Building2, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Form */}
      <div className="flex items-center justify-center p-8 bg-background">
        <Card className="w-full max-w-md border-border/50 shadow-xl">
          <CardHeader className="space-y-4 text-center">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold">FilaZero</CardTitle>
            <CardDescription className="text-base">
              Sistema inteligente de gerenciamento de filas e pedidos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>
              <div className="text-center text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">
                  Esqueci minha senha
                </a>
              </div>
              <Button type="button" variant="outline" className="w-full">
                Criar conta
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:flex items-center justify-center p-8 bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
        <div className="relative z-10 text-center space-y-6 max-w-lg text-white">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-green-400 flex items-center justify-center">
            <Building2 className="w-12 h-12" />
          </div>
          <h2 className="text-4xl font-bold">Bem-vindo ao FilaZero</h2>
          <p className="text-lg text-blue-100">
            Otimize seu atendimento, gerencie pedidos em tempo real e aumente a
            satisfação dos seus clientes com tecnologia de ponta.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-green-400">98%</div>
              <div className="text-sm text-blue-100">Satisfação</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-purple-400">-50%</div>
              <div className="text-sm text-blue-100">Tempo de espera</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold text-blue-400">+35%</div>
              <div className="text-sm text-blue-100">Eficiência</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
