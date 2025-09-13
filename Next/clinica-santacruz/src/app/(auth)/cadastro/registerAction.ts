'use server'

import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";
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

    const user = await db.usuario.findUnique({
        where:{
            username: data.user,
        }
    });

    if(user) {
        throw new Error('Usuario já existe');
    }

   await db.usuario.create({
        data: {
            nome: data.nome,
            senha: hashSync(data.password),
            username: data.user,
            email: data.email,
        },

    })

}