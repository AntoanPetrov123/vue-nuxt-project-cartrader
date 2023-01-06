<script setup>

//composable for reusing the function
import useFetchCar from "~/composables/useFetchCar";

const { toTitleCase } = useUnilities();

const {cars} = useCar();
const route = useRoute();

//get current car object
const { data: car } = await useFetchCar(route.params.id);

//change name of the page
useHead({
    title: toTitleCase(route.params.name),
});

if(!car.value) {
    //create custom error by NUXT (SSR error)
    throw createError({
       statusCode: 404,
       message:  `Car with an ID of ${route.params.id} dose not exist!`
    })
}

//add custom layout
definePageMeta({
    layout: "custom"
})
</script>

<template>
  <div v-if="car">
        <!-- CAR HERO -->
          <CarDetailsHero :car="car" />
      <!-- CAR ATTRIBUTES -->
          <CarDetailsAtributes :features="car.features" />
      <!-- CAR DESCRIPTION -->
          <CarDetailsDescription :description="car.description" />
      <!-- CAR CONTACT -->
          <CarDetailsContact :car="car" />
    </div>
</template>