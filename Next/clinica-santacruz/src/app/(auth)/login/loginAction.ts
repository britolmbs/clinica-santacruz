'use server'

import { signIn } from "@/lib/auth"

export default async function loginAction(_prevState: any, formData: FormData) {
try {
     await signIn("credentials", {
        username: formData.get('user') as string,
        password: formData.get('password') as string,
        redirect: false,
        });

     return { success: true };
} catch (err) {
    if(err.type === 'CredentialsSignin') {
     return { success : false, message: 'Usuario ou Senha Invalida'};
    }
    return { success: false, message: 'Ops, Algo de Errado' };
}
   
}