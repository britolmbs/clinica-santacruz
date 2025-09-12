'use server'

import db from "@/lib/db";
import z from "zod";
 

export default async function RegisterAction(formData: FormData){
    const entries = Array.from(formData.entries());
    const data = Object.fromEntries(entries) as { nome: string,
    password: string,
    user: string,
    email?: string | null,
};
    
    console.log(data);

    if(!data.user ||data.email || !data.nome || data.password) {
        throw new Error("Necessario passar Usuario e Senha");
    }

   await db.usuario.create({
        data: {
            nome: data.nome,
            senha: data.password,
            username: data.user,
            email: data.email,
        },

    })

}