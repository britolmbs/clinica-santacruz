'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "next/form";

export default function LoginForm() {
    return (
        <>
         <Form action={() => {}}>
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