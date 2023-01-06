import cars from "@/data/cars.json";

export default defineEventHandler((event) => {
    const { id } = event.context.params;

    const car = cars.find(c => {
        return c.id === +id;
    })

    if (!car) {
        throw createError({
            statusCode: 404,
            message:  `Car with an ID of ${id} dose not exist!`
        });
    }

    return car;
});