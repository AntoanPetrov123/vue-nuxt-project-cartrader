<script setup>

const error = useError();
const handleGoHome = () => {
    //clear previous error with NUXT
    clearError({
        redirect: '/'
    })
};
</script>

<template>
    <div class="flex h-screen justify-center items-center flex-col">
        <h1 class="text-9xl">{{error.statusCode}}</h1>
        <br>
        <span class="text-4xl">{{error.message}}</span>
        <button @click="handleGoHome" class="rounded mt-7 text-2xl bg-blue-400 px-7 py-4 text-white">Go Home</button>
    </div>
</template>