import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler((event) => {
    //filter listed cars by criteria
    const { city } = event.context.params;
    const {make, minPrice, maxPrice} = getQuery(event)

    //create filter for sorting cars
    // by city(required),
    // by make(optional),
    // by price(optional)
    const filters = {
        city: city.toLocaleLowerCase()
    }

    if (make) {
        filters.make = make;
    }

    //if any price set create an object in filters
    if (minPrice || maxPrice) {
        filters.price = {};
    }

    if (minPrice) {
        filters.price.gte = parseInt(minPrice);
    }

    if (maxPrice) {
        filters.price.lte = parseInt(maxPrice);
    }

    return prisma.car.findMany({
        where: filters
    });
});