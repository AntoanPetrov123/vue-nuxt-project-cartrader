<script setup>
    import filledStar from "@/assets/filledStar.jpg";
    import outlineStar from "~/assets/outlineStar.jpg";

    //get props of different cars
    const props = defineProps({
        car: Object,
        favored: Boolean
    });

    // //change star image manual
    // const favoured = useState(`favored-${props.car.id}`, () => {
    //     return false;
    // });

    //get passed function from parent component
    const emit = defineEmits(['favor'])
    //go to details page
    const handleDetails = () => {
        navigateTo(`/car/${props.car.name}-${props.car.id}`);
    };
</script>

<template>
  <div
      class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
      :car="props"
  >
      <img class="absolute w-7 right-5 top-2 z-20" :src="favored  ? filledStar : outlineStar" alt="star" @click="emit('favor', car.id)" />
    <div class="flex h-full"  @click="handleDetails">
      <NuxtImg
          :src="car.url"
          :alt="car.name"
          class="w-[300px] h-full"
      />
      <div class="p-4 flex flex-col">
        <div>
          <h1 class="text-2xl text-blue-700">{{car.name}}</h1>
          <p class="text-gray-700">
            {{car.description}}
          </p>
        </div>
        <h1 class="mt-auto text-xl">${{car.price}}</h1>
      </div>
    </div>
  </div>
</template>