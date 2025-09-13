'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Form from "next/form"
import { useActionState } from "react";
import RegisterAction from "./registerAction";
import { Button } from "@/components/ui/button";

export default function RegisterForm(){

      const [state, formAction, isPeding] = useActionState(RegisterAction, null);

    return (
        <>
        {state?.success === false && (
            <div className=" text-xs mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error! </strong>
                <span className="block sm:inline">{state?.message}</span>
            </div>
         )}
       <Form action={formAction}>
                    <div>
                        <Label className="p-2">Nome</Label>
                        <Input type="text" name="nome" placeholder="Seu Nome"/>
                    </div>
                     <div>
                        <Label className="p-2">Usuario</Label>
                        <Input type="text" name="user" placeholder="Seu Usuario"/>
                    </div>
                    <div>
                        <Label className="p-2">Email</Label>
                        <Input type="email" name="email" placeholder="Digite seu Email" />
                    </div>
                    <div>
                        <Label className="p-2">Senha</Label>
                        <Input type="password" name="senha" placeholder="Digite Sua Senha" />       
                    </div>
                    <div>
                        <Button disabled={isPeding} className="w-full mt-6" type="submit">
                            Registrar
                        </Button>
                    </div>
                    </Form>
                    </>
    )
}