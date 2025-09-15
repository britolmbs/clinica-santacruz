'use server'
import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";

 

export default async function RegisterAction(_prevState: any, formData: FormData){
    const entries = Array.from(formData.entries());
    const data = Object.fromEntries(entries) as { nome: string,
    password: string,
    username: string,
    email?: string | null,
};
    
 

    if(!data.username ||!data.email || !data.nome || !data.password) {
       return{
        message: 'Preencha todos os campos',
        success: false,
       }
    }

    const user = await db.usuario.findUnique({
        where:{
            username: data.username,
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
            password: hashSync(data.password),
            username: data.username,
            email: data.email,
        },

    });

    return {
         message: 'Usuário criado com sucesso',
         success: true,
        }

}