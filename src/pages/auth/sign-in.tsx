import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Banana } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";

const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
});

type SignInForm = z.infer<typeof signInForm>;

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
  });

  const handleSignIn = async (data: SignInForm) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-full bg-muted">
      <div className="p-16">
        <header className="text-xl font-semibold flex items-center gap-2 mb-16">
          <Banana size={20} /> <span>Nowaste Shop</span>
        </header>
        <main>
          <h1 className="text-2xl font-semibold tracking-tight">
            Acesse sua conta
          </h1>
          <span className="text-sm text-muted-foreground mb-12 block">
            Acompanhe suas vendas pelo painel do parceiro!
          </span>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <div className="mb-4">
              <Label className="mb-2" htmlFor="email">
                E-mail
              </Label>
              <Input
                type="text"
                placeholder="Seu e-mail"
                id="email"
                {...register("email")}
              />
            </div>
            <div className="mb-4">
              <Label className="mb-2" htmlFor="password">
                Senha
              </Label>
              <Input
                type="password"
                placeholder="Sua senha"
                id="password"
                {...register("password")}
              />
            </div>
            <a
              className="text-sm font-semibold underline cursor-pointer hover:text-muted-foreground mb-4 block"
              href="#"
            >
              Esqueci minha senha
            </a>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer mb-2"
            >
              Entrar
            </Button>
            <Link
              className="text-sm font-semibold underline cursor-pointer hover:text-muted-foreground mb-4 block text-center block"
              to={"/signUp"}
            >
              Não possui uma conta? Cadastre-se grátis
            </Link>
          </form>
        </main>
      </div>
    </div>
  );
};
