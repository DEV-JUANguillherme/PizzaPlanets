import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma/prismaServe";

interface AuthResquest{
    email: string,
    password: string
}
class AuthUserService{
    async execute({email, password}: AuthResquest){
        // verificar se o email existe
        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if (!user){
            throw new Error("User/password incorrect")
        }
        // verificar se a senha esta correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("User/password incorrect")
        }

        // gerar token JWT, se der tudo certo
      


    }
}

export {AuthUserService};