import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import RegisterForm from "./registerform";
export default function RegisterPage() {

  

    return (
        <>
        <div className="flex flex-col items-center justify-center py-40">
            <Card className="max-w-sm w-full rounded-2xl mt-12">
                <CardHeader>
                    <h2 className=" text-center text-xl font-bold">Cadastre-se</h2>
                    <CardDescription className="text-indigo-900">Faça seu Registro na Clinica Santa Cruz.</CardDescription>
                </CardHeader>
                <CardContent>
                <RegisterForm />
                </CardContent>
            </Card>
             <p className="text-sm text-muted-foreground mt-3">Já possui cadastro? {' '}
                <Link className="text-gray-800 hover:underline" href='/login'>Faça Login</Link> .
                </p>
        </div>
        </>
    )
}