import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import LoginForm from "./login-form";

export default async function LoginPage() {
    return(
        <>
        <div className="flex flex-col items-center justify-center py-40">
        <Card className="max-w-sm w-full rounded-2xl mt-12">
        <CardHeader>
            <h2 className="text-xl font-bold text-indigo-900">Bem Vindo - Clinica Santa Cruz</h2>
            <CardHeader>Faça seu Login com Usuario e Senha.</CardHeader>
        </CardHeader>
        <CardContent>
         <LoginForm />
        </CardContent>
        </Card>
        <p className="text-sm text-muted-foreground mt-3">Não Possui cadastro? {' '}
            <Link className="text-gray-800 hover:underline" href='/cadastro'>
            Registre-se</Link> .
        </p>
        </div>
        </>
    );
}