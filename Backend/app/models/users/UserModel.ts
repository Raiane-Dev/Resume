import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserModel
{
    constructor()
    {

    }

    public async selectOne( condition: any )
    {
        return await prisma.user.findUnique({
            where: condition
        });    
    }

    public async selectMany()
    {
        return await prisma.user.findMany();    
    }

    public async update( body: any, condition: any )
    {
        return await prisma.user.update({
            where: condition,
            data: {...body}
        });    
    }

    public async insert( body: any )
    {
        return await prisma.user.create({
            data: { ...body }
        });
    }

    public async delete( condition: any )
    {
        return await prisma.user.delete({
            where: condition
        });    
    }
    
}

export default UserModel;