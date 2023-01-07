<script setup>

    const props = defineProps({
        message: Object,
        id: String
    })

    const emits = defineEmits(['deleteMessageClick']);

</script>

<template>
  <div class="even:bg-gray-100 p-4">
      <h1 class="font-fold text-2xl">{{ message.name }}</h1>
      <p class="text-gray-700">
      {{message.message}}
    </p>
      <div class="flex items-center mt-4">
          <p class="text-green-700 mr-10">{{ message.email }}</p>
          <p class="text-blue-500">{{ message.phone }}</p>
      </div>
      <p class="text-red-400 cursor-pointer mt-5"  @click="emits('deleteMessageClick', message.id)">Delete</p>
  </div>
</template>