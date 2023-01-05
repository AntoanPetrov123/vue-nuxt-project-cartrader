<script setup>

const { cars } = useCar();

//create object in local storage for favourite cars
const favourite = useLocalStorage("favourite", {});

//add or remove id from object of favourite cars
const handleFavourite = (id) => {
    if (id in favourite.value) {
        delete favourite.value[id];
    } else {
        favourite.value = {
            ...favourite.value,
            [id]: true
        }
    }
}

</script>

<template>
  <div class="w-full">
      <!-- CAR CARD -->
        <CarCard v-for="car in cars" :key="car.id" :car="car" :favored="car.id in favourite" @favor="handleFavourite"/>
      <!-- CAR CARD -->
  </div>
</template>