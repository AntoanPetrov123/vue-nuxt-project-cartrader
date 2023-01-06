import cars from "@/data/cars.json";

export default defineEventHandler((event) => {
    //filter listed cars by criteria
    const { city } = event.context.params;
    const {make, minPrice, maxPrice} = getQuery(event)
    let filteredCars = cars;

    filteredCars = filteredCars.filter(car => {
        return car.city.toLocaleLowerCase() === city.toLocaleLowerCase();
    });

    if(make) {
        filteredCars = filteredCars.filter(car => {
            return car.make.toLocaleLowerCase() === make.toLocaleLowerCase();
        });
    }

    if(minPrice) {
        filteredCars = filteredCars.filter(car => {
            return +car.price >= +minPrice;
        });
    }
    if(maxPrice) {
        filteredCars = filteredCars.filter(car => {
            return +car.price <= +maxPrice;
        });
    }

    return filteredCars;
});