<script setup>

//composable for reusing the function
const { toTitleCase } = useUnilities();

const {cars} = useCar();
const route = useRoute();

//change name of the page
useHead({
    title: toTitleCase(route.params.name),
});

//get current car object
const car = computed(() => {
  return cars.find((c) => {
      return c.id === parseInt(route.params.id);
  })
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