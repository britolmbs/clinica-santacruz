import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Form from 'next/form'
import RegisterAction from "./registerAction";


export default async function RegisterPage() {
    return (
        <>
        <div className="flex flex-col items-center justify-center py-40">
            <Card className="max-w-sm w-full rounded-2xl mt-12">
                <CardHeader>
                    <h2 className=" text-center text-xl font-bold">Cadastre-se</h2>
                    <CardDescription className="text-indigo-900">Faça seu Registro na Clinica Santa Cruz.</CardDescription>
                </CardHeader>
                <CardContent>
                   
                    <Form action={RegisterAction}>
                    <div>
                        <Label className="p-2">Nome</Label>
                        <Input type="text" name="name" placeholder="Seu Nome"/>
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
                        <Input type="password" name="password" placeholder="Digite Sua Senha" />       
                    </div>
                    <div>
                        <Button className="w-full mt-6" type="submit">
                            Registrar
                        </Button>
                    </div>
                    </Form>
                </CardContent>
            </Card>
             <p className="text-sm text-muted-foreground mt-3">Já possui cadastro? {' '}
                <Link className="text-gray-800 hover:underline" href='/login'>Faça Login</Link> .
                </p>
        </div>
        </>
    )
}