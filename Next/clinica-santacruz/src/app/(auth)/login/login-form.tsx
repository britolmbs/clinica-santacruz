'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "next/form";
import loginAction from "./loginAction";
import { useActionState } from "react";

export default function LoginForm() {
    const [ state, formAction, isPending] = useActionState(loginAction, null);
    return (
       <>
       {state?.success === false && (
        <div role="alert" className="text-xs mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Erro! </strong>
            <span className="block sm:inline">{state?.message}</span>
        </div>
       )}
         <Form action={formAction}>
              <div>
                <Label>Usuario</Label>
                <Input type="text" name="usuario" placeholder="Digite seu Usuario" />
            </div>
            <div>
            <Label>Senha</Label>
            <Input type="password" name="password" placeholder="Digite Sua Senha" />
            </div>
            <div>
                <Button className="w-full mt-6" type="submit">Login</Button>
            </div>
          </Form>
        </>
    )
}