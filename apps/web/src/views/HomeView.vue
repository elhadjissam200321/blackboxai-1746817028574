<template>
  <main class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative bg-white">
      <div class="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block">Discover Amazing</span>
            <span class="block text-primary">Local Cuisine</span>
          </h1>
          <p class="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Order delicious dishes from talented local chefs. Fresh, authentic, and delivered to your door.
          </p>
          
          <!-- Search Bar -->
          <div class="mt-10">
            <div class="flex justify-center">
              <div class="relative w-full max-w-lg">
                <input
                  type="text"
                  class="w-full rounded-full border-gray-300 px-6 py-3 text-gray-900 shadow-sm focus:border-primary focus:ring-primary"
                  placeholder="Search for dishes or cuisines..."
                />
                <button class="absolute right-2 top-2 rounded-full bg-primary p-2 text-white hover:bg-primary/90">
                  <span class="sr-only">Search</span>
                  <!-- Heroicon: magnifying-glass -->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Dishes Section -->
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Featured Dishes</h2>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Dish cards will be dynamically rendered here -->
          <div v-for="i in 6" :key="i" class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="aspect-w-16 aspect-h-9 bg-gray-200"></div>
            <div class="p-4">
              <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div class="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div class="text-center">
            <div class="mx-auto h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">1</div>
            <h3 class="text-xl font-semibold mb-2">Browse Dishes</h3>
            <p class="text-gray-600">Explore a variety of dishes from local chefs</p>
          </div>
          <div class="text-center">
            <div class="mx-auto h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">2</div>
            <h3 class="text-xl font-semibold mb-2">Place Order</h3>
            <p class="text-gray-600">Choose your favorites and customize your order</p>
          </div>
          <div class="text-center">
            <div class="mx-auto h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mb-4">3</div>
            <h3 class="text-xl font-semibold mb-2">Enjoy!</h3>
            <p class="text-gray-600">Receive your fresh, delicious meal</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// Component logic will be added here
</script>
