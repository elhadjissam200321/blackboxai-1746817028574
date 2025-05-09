<template>
  <main class="min-h-screen bg-white">
    <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="flex mb-8" aria-label="Breadcrumb">
        <ol class="flex items-center space-x-2">
          <li>
            <router-link to="/" class="text-gray-500 hover:text-gray-700">Home</router-link>
          </li>
          <li>
            <span class="text-gray-300 mx-2">/</span>
            <router-link to="/dishes" class="text-gray-500 hover:text-gray-700">Dishes</router-link>
          </li>
          <li>
            <span class="text-gray-300 mx-2">/</span>
            <span class="text-gray-900">Current Dish</span>
          </li>
        </ol>
      </nav>

      <!-- Dish Details -->
      <div class="lg:grid lg:grid-cols-2 lg:gap-x-8">
        <!-- Image Gallery -->
        <div class="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 mb-8 lg:mb-0">
          <!-- Main Image -->
          <div class="relative h-96 rounded-lg overflow-hidden">
            <div class="absolute inset-0 bg-gray-200 animate-pulse"></div>
          </div>
          <!-- Thumbnail Grid -->
          <div class="grid grid-cols-4 gap-2 mt-4">
            <div v-for="i in 4" :key="i" class="aspect-w-1 aspect-h-1 rounded bg-gray-200"></div>
          </div>
        </div>

        <!-- Dish Info -->
        <div class="lg:pl-8">
          <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-2">Loading...</h1>
            <div class="flex items-center mb-4">
              <div class="flex items-center">
                <!-- Star rating placeholder -->
                <div class="h-5 w-24 bg-gray-200 rounded"></div>
              </div>
              <span class="ml-2 text-sm text-gray-500">(XX reviews)</span>
            </div>
            <p class="text-2xl font-bold text-gray-900 mb-4">$XX.XX</p>
            <p class="text-gray-600 mb-6">Loading description...</p>

            <!-- Chef Info -->
            <div class="flex items-center mb-6">
              <div class="h-12 w-12 rounded-full bg-gray-200"></div>
              <div class="ml-4">
                <h3 class="text-sm font-medium text-gray-900">Prepared by</h3>
                <p class="text-sm text-gray-500">Loading chef name...</p>
              </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                Loading...
              </span>
            </div>

            <!-- Add to Cart -->
            <div class="border-t border-gray-200 pt-6">
              <div class="flex items-center mb-4">
                <label for="quantity" class="mr-4 text-sm font-medium text-gray-700">Quantity</label>
                <select
                  id="quantity"
                  class="rounded-md border-gray-300 py-1.5 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                >
                  <option v-for="i in 5" :key="i" :value="i">{{ i }}</option>
                </select>
              </div>
              <button class="w-full bg-primary text-white py-3 px-8 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Add to Cart
              </button>
            </div>
          </div>

          <!-- Reviews Section -->
          <div class="border-t border-gray-200 pt-6">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
            <!-- Review Items -->
            <div class="space-y-6">
              <div v-for="i in 3" :key="i" class="border-b border-gray-200 pb-6">
                <div class="flex items-center mb-2">
                  <div class="h-8 w-8 rounded-full bg-gray-200"></div>
                  <div class="ml-4">
                    <div class="h-4 w-24 bg-gray-200 rounded"></div>
                    <div class="mt-1 h-3 w-16 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div class="mt-2">
                  <div class="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                  <div class="h-4 w-1/2 bg-gray-200 rounded"></div>
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
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug

// Component logic will be added here
</script>
