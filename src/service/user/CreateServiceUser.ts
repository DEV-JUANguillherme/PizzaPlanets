import { hash } from "bcryptjs";
import prismaClient from "../../prisma/prismaServe";

interface UserRequest{
  name: string;
  email: string;
  password: string;
}

class CreateUserService{
  async execute({name, email, password}: UserRequest){

    if(!email){
      throw new Error("email incorrect")
    }

    const userAlreadyExist = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })

    if(userAlreadyExist){
      throw new Error("User already exists")
    }


    const passwordHash = await hash(password, 8)
    const user = await prismaClient.user.create({
      data:{
        name:name,
        email:email,
        password:passwordHash,
      }, 
      select: {
        id:true,
        name:true,
        email:true,
      }
    })

    
    return user
  }
}

export { CreateUserService }