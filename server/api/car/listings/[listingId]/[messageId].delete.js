import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async(event) => {
    const { messageId } = event.context.params;

    return prisma.message.delete({
        where: {
            id: parseInt(messageId)
        }
    });
});