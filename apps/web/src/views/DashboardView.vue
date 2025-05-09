<template>
  <main class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <!-- Dashboard Header -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900">My Dashboard</h1>
        <p class="mt-2 text-gray-600">Manage your orders, addresses, and rewards</p>
      </div>

      <!-- Dashboard Grid -->
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <!-- Profile Summary Card -->
        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="h-16 w-16 rounded-full bg-gray-200"></div>
            <div class="ml-4">
              <h2 class="text-xl font-semibold text-gray-900">Loading...</h2>
              <p class="text-gray-500">Member since Loading...</p>
            </div>
          </div>
          <div class="mt-6">
            <div class="flex justify-between items-center mb-2">
              <span class="text-gray-600">Loyalty Points</span>
              <span class="text-lg font-semibold text-primary">XXX pts</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-primary rounded-full h-2" style="width: 45%"></div>
            </div>
            <p class="mt-2 text-sm text-gray-500">XX points until next reward</p>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div class="space-y-4">
            <router-link
              to="/dishes"
              class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
              </svg>
              <span class="ml-3 text-gray-900">Browse Dishes</span>
            </router-link>
            <router-link
              to="/cart"
              class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span class="ml-3 text-gray-900">View Cart</span>
            </router-link>
            <button
              class="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-primary">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              <span class="ml-3 text-gray-900">Edit Profile</span>
            </button>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div class="space-y-4">
            <div v-for="i in 3" :key="i" class="flex items-center">
              <div class="h-8 w-8 rounded-full bg-gray-200"></div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">Loading...</p>
                <p class="text-sm text-gray-500">Loading...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Order History -->
      <div class="mt-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Order History</h2>
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
          <ul role="list" class="divide-y divide-gray-200">
            <li v-for="i in 5" :key="i" class="hover:bg-gray-50">
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="h-10 w-10 rounded bg-gray-200"></div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-gray-900">Order #XXXXX</p>
                      <p class="text-sm text-gray-500">Loading...</p>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <span class="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                      Loading...
                    </span>
                    <button class="ml-4 text-primary hover:text-primary/90">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Saved Addresses -->
      <div class="mt-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900">Saved Addresses</h2>
          <button class="text-primary hover:text-primary/90 font-medium">
            Add New Address
          </button>
        </div>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="i in 3" :key="i" class="bg-white rounded-lg shadow p-6">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium text-gray-900">Loading...</h3>
                <p class="mt-1 text-gray-600">Loading...</p>
              </div>
              <button class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">Edit</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// Component logic will be added here
</script>
