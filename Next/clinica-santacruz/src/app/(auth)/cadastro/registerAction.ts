'use server'
import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";

 

export default async function RegisterAction(_prevState: any, formData: FormData){
    const entries = Array.from(formData.entries());
    const data = Object.fromEntries(entries) as { nome: string,
    senha: string,
    user: string,
    email?: string | null,
};
    
    console.log(data);

    if(!data.user ||data.email || !data.nome || data.senha) {
       return{
        message: 'Preencha todos os campos',
        success: false,
       }
    }

    const user = await db.usuario.findUnique({
        where:{
            username: data.user,
        }
    });

    if(user) {
        return {
            message: 'Usuário Já existe',
            success: false,
        }
    }

   await db.usuario.create({
        data: {
            nome: data.nome,
            senha: hashSync(data.senha),
            username: data.user,
            email: data.email,
        },

    });

    return {
         message: 'Usuário criado com sucesso',
         success: true,
    }

}