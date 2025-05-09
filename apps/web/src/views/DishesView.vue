<template>
  <main class="min-h-screen bg-white">
    <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Explore Dishes</h1>
        <p class="mt-2 text-gray-600">Discover delicious dishes from talented local chefs</p>
      </div>

      <!-- Filters and Grid Container -->
      <div class="lg:grid lg:grid-cols-4 lg:gap-8">
        <!-- Filters Sidebar -->
        <div class="hidden lg:block lg:col-span-1">
          <div class="sticky top-4 space-y-6">
            <!-- Search -->
            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-4">Search</h3>
              <div class="relative">
                <input
                  type="text"
                  class="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  placeholder="Search dishes..."
                />
              </div>
            </div>

            <!-- Price Range -->
            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-4">Price Range</h3>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span class="ml-2 text-gray-600">$0 - $15</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span class="ml-2 text-gray-600">$15 - $30</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span class="ml-2 text-gray-600">$30+</span>
                </label>
              </div>
            </div>

            <!-- Cuisine Type -->
            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-4">Cuisine</h3>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span class="ml-2 text-gray-600">Italian</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span class="ml-2 text-gray-600">Japanese</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span class="ml-2 text-gray-600">Mexican</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span class="ml-2 text-gray-600">Indian</span>
                </label>
              </div>
            </div>

            <!-- Dietary Restrictions -->
            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-4">Dietary</h3>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span class="ml-2 text-gray-600">Vegetarian</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span class="ml-2 text-gray-600">Vegan</span>
                </label>
                <label class="flex items-center">
                  <input type="checkbox" class="rounded border-gray-300 text-primary focus:ring-primary" />
                  <span class="ml-2 text-gray-600">Gluten-Free</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Dishes Grid -->
        <div class="lg:col-span-3">
          <!-- Sort Options -->
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
              <span class="text-gray-600">Sort by:</span>
              <select class="ml-2 rounded-md border-gray-300 text-base focus:border-primary focus:outline-none focus:ring-primary">
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
            <button class="lg:hidden rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-200">
              <span class="sr-only">Filters</span>
              <!-- Heroicon: adjustments-vertical -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
              </svg>
            </button>
          </div>

          <!-- Grid -->
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="i in 9" :key="i" class="group relative bg-white rounded-lg shadow-md overflow-hidden">
              <div class="aspect-w-4 aspect-h-3 bg-gray-200 group-hover:opacity-75">
                <div class="h-full w-full object-cover object-center"></div>
              </div>
              <div class="p-4">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-medium text-gray-900">
                    <span class="absolute inset-0"></span>
                    Loading...
                  </h3>
                  <p class="text-sm font-medium text-gray-900">$XX.XX</p>
                </div>
                <p class="mt-1 text-sm text-gray-500">Loading description...</p>
                <div class="mt-2 flex items-center">
                  <div class="flex items-center">
                    <!-- Star placeholder -->
                    <div class="h-4 w-20 bg-gray-200 rounded"></div>
                  </div>
                  <span class="ml-2 text-sm text-gray-500">(XX)</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
            <button class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Previous
            </button>
            <button class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// Component logic will be added here
</script>
