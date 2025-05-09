<template>
  <main class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <!-- Chef Profile Header -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <div class="relative h-48 bg-gray-200">
          <!-- Cover Image Placeholder -->
          <div class="absolute inset-0"></div>
        </div>
        <div class="relative px-4 py-5 sm:px-6">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="sm:flex sm:items-center">
              <!-- Chef Avatar -->
              <div class="relative -mt-16">
                <div class="h-24 w-24 rounded-full ring-4 ring-white bg-gray-200"></div>
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-4">
                <h1 class="text-2xl font-bold text-gray-900">Loading...</h1>
                <p class="text-sm text-gray-500">Loading location...</p>
              </div>
            </div>
            <div class="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0">
              <div class="flex items-center">
                <div class="flex items-center">
                  <!-- Star Rating -->
                  <div class="flex items-center">
                    <div v-for="i in 5" :key="i" class="h-5 w-5 text-gray-200">
                      <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <p class="ml-2 text-sm text-gray-500">(XX reviews)</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Chef Bio -->
          <div class="mt-6">
            <h2 class="text-lg font-medium text-gray-900">About</h2>
            <p class="mt-2 text-gray-600">Loading bio...</p>
          </div>
          <!-- Stats -->
          <dl class="mt-6 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
            <div class="text-center">
              <dt class="text-sm font-medium text-gray-500">Dishes</dt>
              <dd class="mt-1 text-xl font-semibold text-gray-900">XX</dd>
            </div>
            <div class="text-center">
              <dt class="text-sm font-medium text-gray-500">Orders</dt>
              <dd class="mt-1 text-xl font-semibold text-gray-900">XX</dd>
            </div>
            <div class="text-center">
              <dt class="text-sm font-medium text-gray-500">Rating</dt>
              <dd class="mt-1 text-xl font-semibold text-gray-900">X.X</dd>
            </div>
          </dl>
        </div>
      </div>

      <!-- Chef's Dishes -->
      <div class="mt-8">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-gray-900">Featured Dishes</h2>
          <div class="flex items-center">
            <select class="rounded-md border-gray-300 text-base focus:border-primary focus:outline-none focus:ring-primary">
              <option>All Categories</option>
              <option>Main Course</option>
              <option>Appetizers</option>
              <option>Desserts</option>
            </select>
          </div>
        </div>

        <!-- Dishes Grid -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="i in 6" :key="i" class="group relative bg-white rounded-lg shadow-md overflow-hidden">
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
      </div>

      <!-- Reviews Section -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="divide-y divide-gray-200">
            <div v-for="i in 5" :key="i" class="p-6">
              <div class="flex items-center">
                <div class="h-12 w-12 rounded-full bg-gray-200"></div>
                <div class="ml-4">
                  <h4 class="text-sm font-medium text-gray-900">Loading...</h4>
                  <div class="mt-1 flex items-center">
                    <!-- Star Rating -->
                    <div class="flex items-center">
                      <div class="h-4 w-20 bg-gray-200 rounded"></div>
                    </div>
                    <span class="ml-2 text-sm text-gray-500">Loading date...</span>
                  </div>
                </div>
              </div>
              <div class="mt-4">
                <p class="text-gray-600">Loading review...</p>
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
import { useRoute } from 'vue-router'

const route = useRoute()
const chefId = route.params.id

// Component logic will be added here
</script>
