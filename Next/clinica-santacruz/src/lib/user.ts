import { compareSync } from "bcrypt-ts";
import db from "./db";
type User = {
    username: string;
    password?: string;
    name: string
}

export async function findUserByCredentials(username: string, password: string): Promise<User |null> {
    const user = await db.usuario.findFirst({
        where: {
            username: username,
        },
      
    });
      if(!user){
            return null
        }

        const passwordMatch = compareSync(password, user.password);

        if(passwordMatch) {
            return  {username: user.username, name: user.nome};
        }
        return null;
}