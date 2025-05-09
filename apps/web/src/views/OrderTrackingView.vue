<template>
  <main class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <!-- Order Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">Order #XXXXX</h1>
            <p class="mt-1 text-sm text-gray-500">Placed on Loading...</p>
          </div>
          <div class="flex items-center space-x-4">
            <span class="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
              Loading status...
            </span>
            <button class="text-primary hover:text-primary/90">
              Need Help?
            </button>
          </div>
        </div>
      </div>

      <!-- Order Progress -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <div class="relative">
          <!-- Progress Bar -->
          <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div class="w-1/2 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
          </div>

          <!-- Progress Steps -->
          <div class="grid grid-cols-4 gap-4">
            <div class="text-center">
              <div class="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-primary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
              <p class="mt-2 text-sm font-medium text-gray-900">Order Placed</p>
              <p class="text-xs text-gray-500">12:00 PM</p>
            </div>
            <div class="text-center">
              <div class="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-primary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                </svg>
              </div>
              <p class="mt-2 text-sm font-medium text-gray-900">Preparing</p>
              <p class="text-xs text-gray-500">12:15 PM</p>
            </div>
            <div class="text-center">
              <div class="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-gray-200 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <p class="mt-2 text-sm font-medium text-gray-400">On the way</p>
              <p class="text-xs text-gray-500">--:-- --</p>
            </div>
            <div class="text-center">
              <div class="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-gray-200 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <p class="mt-2 text-sm font-medium text-gray-400">Delivered</p>
              <p class="text-xs text-gray-500">--:-- --</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Map and Order Details Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Map -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-96 bg-gray-100">
              <!-- Map will be mounted here -->
            </div>
          </div>
        </div>

        <!-- Order Details -->
        <div class="space-y-6">
          <!-- Delivery Info -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-lg font-medium text-gray-900 mb-4">Delivery Information</h2>
            <div class="space-y-3">
              <div>
                <p class="text-sm text-gray-500">Delivery Address</p>
                <p class="text-sm font-medium text-gray-900">Loading address...</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Estimated Delivery Time</p>
                <p class="text-sm font-medium text-gray-900">Loading time...</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Delivery Partner</p>
                <div class="flex items-center mt-1">
                  <div class="h-8 w-8 rounded-full bg-gray-200"></div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">Loading name...</p>
                    <p class="text-xs text-gray-500">Loading vehicle...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Order Summary -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            <div class="space-y-4">
              <!-- Order Items -->
              <div class="border-b border-gray-200 pb-4">
                <div v-for="i in 3" :key="i" class="flex justify-between py-2">
                  <div class="flex items-center">
                    <span class="text-gray-500 mr-2">1x</span>
                    <span class="text-gray-900">Loading item...</span>
                  </div>
                  <span class="text-gray-900">$XX.XX</span>
                </div>
              </div>

              <!-- Order Total -->
              <div class="space-y-2">
                <div class="flex justify-between">
                  <span class="text-gray-500">Subtotal</span>
                  <span class="text-gray-900">$XX.XX</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-500">Delivery Fee</span>
                  <span class="text-gray-900">$X.XX</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-500">Tax</span>
                  <span class="text-gray-900">$X.XX</span>
                </div>
                <div class="flex justify-between border-t border-gray-200 pt-2">
                  <span class="font-medium text-gray-900">Total</span>
                  <span class="font-medium text-gray-900">$XX.XX</span>
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
const orderId = route.params.id

// Component logic will be added here
// We'll need to:
// 1. Initialize the map using Leaflet
// 2. Set up real-time order status updates
// 3. Track delivery partner location
// 4. Update order progress indicators
</script>
