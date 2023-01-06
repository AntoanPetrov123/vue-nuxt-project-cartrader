<template>
  <header
      class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
      <div>
          <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
      </div>
      <div class="flex justify-between items-center space-x-4">
          <NuxtLink class="text-1.6xl font-mono" to="/city/Sofia/car">Home</NuxtLink>
          <NuxtLink class="text-1.6xl font-mono" to="/login">Login</NuxtLink>
          <NuxtLink class="text-1.6xl font-mono" to="/register">Register</NuxtLink>
          <NuxtLink class="text-1.6xl font-mono" to="/profile/listings">Profile</NuxtLink>
          <NuxtLink class="text-1.6xl font-mono" to="/">Logout</NuxtLink>
      </div>
  </header>
</template>