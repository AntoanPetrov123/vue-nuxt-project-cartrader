<script setup>

//composable for reusing the function
const { toTitleCase } = useUnilities();

const route = useRoute();
//change name of the page
useHead({
    title: toTitleCase(route.params.name)
});

//add custom layout
definePageMeta({
    layout: "custom"
})
</script>

<template>
  <div>
        <!-- CAR HERO -->
          <CarDetailsHero/>
      <!-- CAR ATTRIBUTES -->
          <CarDetailsAtributes />
      <!-- CAR DESCRIPTION -->
          <CarDetailsDescription />
      <!-- CAR CONTACT -->
          <CarDetailsContact/>
    </div>
</template>