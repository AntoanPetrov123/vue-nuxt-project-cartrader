<script setup>
const { toTitleCase } = useUnilities();

const route = useRoute();
//change name of a page
useHead({
    title: `${route.params.make ? toTitleCase(route.params.make) : "Cars"} in ${toTitleCase(route.params.city)}`
});

definePageMeta({
    layout: "custom"
})
</script>
<template>
    <div>
        <div class="mt-32 flex">
            <!-- CAR SIDE BAR -->
            <CarSideBar />
            <!-- CAR CARDS rendered by NuxtPage-->
            <NuxtPage />
        </div>
    </div>
</template>