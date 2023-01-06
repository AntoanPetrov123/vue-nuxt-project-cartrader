<script setup>
import useFetchCars from "~/composables/useFetchCars";

const route = useRoute();
const {data: cars, refresh} = await useFetchCars(route.params.city, {
    make: route.params.make,
    minPrice: route.query.minPrice,
    maxPrice: route.query.maxPrice,
});

watch(
    () => route.query,
    () => {
        window.location.reload(true);
    }
);
</script>

<template>
  <div>
      <CarCards  v-if="cars.length > 0" :cars="cars"/>
      <div v-else>
            <h1 class="text-red-600 mt-20 text-3xl">No such car found!</h1>
      </div>
  </div>
</template>