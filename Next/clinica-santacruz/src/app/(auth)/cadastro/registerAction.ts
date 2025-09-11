'use server'

import z from "zod";


export default async function RegisterAction(formData: FormData){
    const email = z.email();
    const entries = Array.from(formData.entries());
    const data = Object.fromEntries(entries);
    
    console.log(data);

    if(!data.user ||data.email || !data.name || data.password) {
        throw new Error("Necessario passar Usuario e Senha");
    }

}