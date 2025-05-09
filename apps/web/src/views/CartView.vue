<template>
  <main class="min-h-screen bg-white">
    <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      <div class="lg:grid lg:grid-cols-12 lg:gap-x-12">
        <!-- Cart Items -->
        <div class="lg:col-span-7">
          <!-- Empty State -->
          <div v-if="!hasItems" class="text-center py-12">
            <div class="mb-4">
              <!-- Shopping cart icon -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto h-12 w-12 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
            <p class="text-gray-500 mb-6">Looks like you haven't added any dishes to your cart yet.</p>
            <router-link
              to="/dishes"
              class="inline-flex items-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Browse Dishes
            </router-link>
          </div>

          <!-- Cart Items List -->
          <div v-else class="space-y-6">
            <div v-for="i in 3" :key="i" class="flex items-center gap-6 py-6 border-b border-gray-200">
              <!-- Dish Image -->
              <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-gray-200"></div>

              <!-- Dish Details -->
              <div class="flex flex-1 flex-col">
                <div>
                  <div class="flex justify-between text-base font-medium text-gray-900">
                    <h3>Loading...</h3>
                    <p class="ml-4">$XX.XX</p>
                  </div>
                  <p class="mt-1 text-sm text-gray-500">Loading chef name...</p>
                </div>
                <div class="flex flex-1 items-end justify-between text-sm">
                  <!-- Quantity Selector -->
                  <div class="flex items-center">
                    <label for="quantity" class="mr-2 text-gray-500">Qty</label>
                    <select
                      class="rounded-md border-gray-300 py-1.5 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                    >
                      <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
                    </select>
                  </div>

                  <!-- Remove Button -->
                  <button type="button" class="font-medium text-primary hover:text-primary/80">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="mt-8 lg:col-span-5 lg:mt-0">
          <div class="rounded-lg bg-gray-50 px-6 py-6">
            <h2 class="text-lg font-medium text-gray-900 mb-6">Order Summary</h2>

            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <p class="text-base text-gray-500">Subtotal</p>
                <p class="text-base font-medium text-gray-900">$XX.XX</p>
              </div>

              <div class="flex items-center justify-between">
                <p class="text-base text-gray-500">Delivery Fee</p>
                <p class="text-base font-medium text-gray-900">$X.XX</p>
              </div>

              <div class="flex items-center justify-between">
                <p class="text-base text-gray-500">Tax</p>
                <p class="text-base font-medium text-gray-900">$X.XX</p>
              </div>

              <div class="border-t border-gray-200 pt-4">
                <div class="flex items-center justify-between">
                  <p class="text-lg font-medium text-gray-900">Total</p>
                  <p class="text-lg font-medium text-gray-900">$XX.XX</p>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <button
                type="button"
                :disabled="!hasItems"
                class="w-full rounded-md bg-primary py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Proceed to Checkout
              </button>
            </div>

            <!-- Loyalty Points -->
            <div class="mt-6 text-center text-sm text-gray-500">
              <p>You'll earn XX loyalty points with this order</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Temporary state for demo
const hasItems = ref(true)
</script>
