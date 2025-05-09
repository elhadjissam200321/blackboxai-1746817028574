<template>
  <main class="min-h-screen bg-white">
    <div class="h-screen flex">
      <!-- Sidebar -->
      <div class="w-96 bg-white border-r border-gray-200 flex flex-col">
        <!-- Search Header -->
        <div class="p-4 border-b border-gray-200">
          <div class="relative">
            <input
              type="text"
              placeholder="Search dishes or cuisines..."
              class="w-full rounded-md border-gray-300 pl-10 pr-4 py-2 focus:border-primary focus:ring-primary"
            />
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
          </div>

          <!-- Filters -->
          <div class="mt-4 flex space-x-2">
            <button class="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-200">
              Price
            </button>
            <button class="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-200">
              Cuisine
            </button>
            <button class="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-200">
              Rating
            </button>
            <button class="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700 hover:bg-gray-200">
              Distance
            </button>
          </div>
        </div>

        <!-- Results List -->
        <div class="flex-1 overflow-y-auto">
          <div class="divide-y divide-gray-200">
            <div v-for="i in 10" :key="i" class="p-4 hover:bg-gray-50 cursor-pointer">
              <div class="flex space-x-4">
                <div class="h-20 w-20 bg-gray-200 rounded-lg flex-shrink-0"></div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <h3 class="text-base font-medium text-gray-900 truncate">Loading...</h3>
                    <p class="text-sm font-medium text-gray-900">$XX.XX</p>
                  </div>
                  <p class="mt-1 text-sm text-gray-500 truncate">Loading chef name...</p>
                  <div class="mt-2 flex items-center">
                    <div class="flex items-center">
                      <div class="h-4 w-20 bg-gray-200 rounded"></div>
                    </div>
                    <span class="ml-2 text-sm text-gray-500">(XX)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Container -->
      <div class="flex-1 relative">
        <!-- Map Placeholder -->
        <div class="absolute inset-0 bg-gray-100">
          <!-- Map will be mounted here -->
        </div>

        <!-- Map Controls -->
        <div class="absolute top-4 right-4 flex flex-col space-y-2">
          <button class="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50">
            <span class="sr-only">Zoom in</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
          <button class="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50">
            <span class="sr-only">Zoom out</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
            </svg>
          </button>
          <button class="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50">
            <span class="sr-only">Current location</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </button>
        </div>

        <!-- Selected Item Preview -->
        <div class="absolute bottom-4 left-4 right-4">
          <div class="bg-white rounded-lg shadow-lg p-4 mx-auto max-w-2xl">
            <div class="flex items-center space-x-4">
              <div class="h-24 w-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-medium text-gray-900 truncate">Loading...</h3>
                  <p class="text-base font-medium text-gray-900">$XX.XX</p>
                </div>
                <p class="mt-1 text-sm text-gray-500">Loading chef name...</p>
                <p class="mt-1 text-sm text-gray-500">Loading description...</p>
                <div class="mt-4">
                  <button class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Component logic will be added here
// We'll need to:
// 1. Initialize the map using a library like Leaflet
// 2. Handle geolocation
// 3. Load and display nearby dishes as markers
// 4. Handle marker clicks and item selection
// 5. Implement search and filtering
</script>
