<script setup>
const props = defineProps({
    car: Object
})
</script>

<template>
  <div class="mt-10">
    <img
        :src="car.image"
        class="w-full"
        alt="car-image"
    />
    <h1 class="mt-10 text-4xl">{{car.name}}</h1>
    <div
        class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between"
    >
      <div class="flex">
        <p class="mr-2">{{ car.numberOfSeats }} seats</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ car.miles }} miles</p>
          <p class="mr-2">|</p>
          <p class="mr-2">{{ car.miles == 0 ?  "Band New" : "Second Hand"}}</p>
      </div>
      <div>
        <p class="font-bold text-2xl">${{ car.price }}</p>
      </div>
    </div>
  </div>
</template>