'use server'

import { signIn } from "@/lib/auth"

export default async function loginAction(formData: FormData) {

    await signIn("credentials", formData);
}