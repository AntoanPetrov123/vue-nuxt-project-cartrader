<script setup>
definePageMeta({
    layout: 'custom'
});

const state = ref({
    showForm: false
})

</script>
<template>
    <div class="mt-10 text-center">
        <h1 class="text-5xl font-bold mb-7">
            Register to Cartrader
        </h1>
        <button v-if="!state.showForm" @click="state.showForm = true" class="bg-blue-400 p-3 rounded text-white font-bold m-2.5">Register with Email</button>
<!--        <button class="bg-red-400 p-3 rounded text-white font-bold m-2.5">Log in with Google</button>-->
        <div v-if="state.showForm" class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Register to Cartrader</h1>
                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="bg-blue-400 w-full mt-2 rounded text-white p-1 hover:bg-blue-700"
                    >Submit</button>
                </div>

                <div class="text-grey-dark mt-6">
                    Already have an account?
                    <NuxtLink class="no-underline border-b border-blue text-blue" to="/login">Log in</NuxtLink>
                </div>
            </div>
        </div>
    </div>

</template>