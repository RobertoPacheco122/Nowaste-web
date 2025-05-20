import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Banana } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Link } from "react-router";

const signUpForm = z.object({
  fullName: z.string(),
  email: z.string().email(),
  password: z.string(),
  cellphone: z.string(),
  birthDate: z.string(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm),
  });

  const handleSignUp = async (data: SignUpForm) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Conta criada com sucesso!", {
        description: "Verifique seu e-mail para verificar sua conta.",
      });

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
            Criar conta grátis
          </h1>
          <span className="text-sm text-muted-foreground mb-12 block">
            Seja um parceiro e comece suas compras!
          </span>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="mb-4">
              <Label className="mb-2" htmlFor="fullName">
                Nome completo
              </Label>
              <Input type="text" id="fullName" {...register("fullName")} />
            </div>
            <div className="mb-4">
              <Label className="mb-2" htmlFor="birthDate">
                Data de nascimento
              </Label>
              <Input type="date" id="birthDate" {...register("birthDate")} />
            </div>
            <div className="mb-4">
              <Label className=" mb-2" htmlFor="cellphone">
                Celular
              </Label>
              <Input type="tel" id="cellphone" {...register("cellphone")} />
            </div>
            <div className="mb-4">
              <Label className="mb-2" htmlFor="email">
                E-mail
              </Label>
              <Input type="email" id="email" {...register("email")} />
            </div>
            <div className="mb-4">
              <Label className="mb-2" htmlFor="email">
                Senha
              </Label>
              <Input type="password" id="password" {...register("password")} />
            </div>
            <Link
              className="text-sm font-semibold underline cursor-pointer hover:text-muted-foreground mb-4 block"
              to={"/signIn"}
            >
              Já possui uma conta? Faça login
            </Link>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full font-semibold cursor-pointer mb-2"
            >
              Cadastrar-se
            </Button>
            <span className="text-sm text-muted-foreground text-center block">
              Ao criar sua conta você concorda com os{" "}
              <a href="#" className="underline">
                Termos de serviço
              </a>{" "}
              e{" "}
              <a href="#" className="underline">
                Políticas de privacidade
              </a>
            </span>
          </form>
        </main>
      </div>
    </div>
  );
};
