<script setup>

const route = useRoute();

const message = ref({
    name: "",
    email: "",
    phone: "",
    message: ""
});

const errorMessage = ref('');
const successMessage = ref('');

const disableButton = computed(() => {
    for (let key in message.value) {
        if (!message.value[key]) {
            return true;
        }
    }
    return false;
});

const onSubmit = async () => {
    try {
        const res = await $fetch(`/api/car/listings/${route.params.id}/message`, {
            method: "POST",
            body: message.value
        });

        successMessage.value = "Message sent successfully";
        errorMessage.value = '';

        message.value = {
            name: "",
            email: "",
            phone: "",
            message: ""
        };

    } catch (error) {
        errorMessage.value = error.statusMessage;
        successMessage.value = '';
        console.log(error);
    }
}
</script>

<template>
  <div class="mt-10">
    <div class="flex w-[600px] justify-between">
      <input v-model="message.name" type="text" class="border p-1" placeholder="Name" />
      <input v-model="message.email" type="text" class="border p-1" placeholder="Email" />
      <input v-model="message.phone" type="text" class="border p-1" placeholder="Phone" />
    </div>
    <div class="flex mt-4 w-[600px]">
      <textarea v-model="message.message" class="border p-1 w-full" placeholder="Message"></textarea>
    </div>
    <button class="bg-blue-400 text-white px-10 py-3 rounded mt-4" :disabled="disableButton" @click="onSubmit">
      Submit
    </button>
      <p v-if="successMessage" class="mt-3 text-green-400">{{ successMessage }}</p>
      <p v-if="errorMessage" class="mt-3 text-red-400">{{ errorMessage }}</p>
  </div>
</template>