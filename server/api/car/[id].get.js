import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const { id } = event.context.params;

    const car = await prisma.car.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if (!car) {
        throw createError({
            statusCode: 404,
            message:  `Car with an ID of ${id} dose not exist!`
        });
    }

    return car;
});