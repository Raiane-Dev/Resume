import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class MailModel
{
    constructor()
    {

    }

    public async selectOne( condition: any )
    {
        return await prisma.messages.findUnique({
            where: condition
        });    
    }

    public async selectMany()
    {
        return await prisma.messages.findMany();    
    }

    public async update( body: any, condition: any )
    {
        return await prisma.messages.update({
            where: condition,
            data: {...body}
        });    
    }

    public async insert( body: any )
    {
        return await prisma.messages.create({
            data: { ...body }
        });
    }

    public async delete( condition: any )
    {
        return await prisma.messages.delete({
            where: condition
        });    
    }
    
}

export default MailModel;