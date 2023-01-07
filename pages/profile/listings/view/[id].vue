<script setup>
definePageMeta({
  layout: "custom",
});

const route = useRoute();

const { data: messages, refresh } = useFetch(`/api/car/listings/${route.params.id}/message`);

const handleDelete = async (id) => {
    let confirmMessage = confirm("Are you sure to delete this?");

    if (confirmMessage) {
        await $fetch(`/api/car/listings/view/${id}`, {
            method: "DELETE"
        });
        refresh();
    }
};
</script>

<template>
  <div class="rounded shadow mt-20">
    <CarMessageCard v-for="message in messages" :key="message.id" :message="message" :id="message.id" @delete-message-click="handleDelete(message.id)"/>
  </div>
</template>