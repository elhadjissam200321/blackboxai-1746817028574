<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="bg-white shadow">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <!-- Logo and Primary Nav -->
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/" class="text-2xl font-bold text-primary">BonPlat</router-link>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <router-link
                to="/dishes"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2"
                :class="[$route.path.startsWith('/dishes') ? 'border-primary' : 'border-transparent']"
              >
                Browse Dishes
              </router-link>
              <router-link
                to="/explore"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2"
                :class="[$route.path === '/explore' ? 'border-primary' : 'border-transparent']"
              >
                Explore
              </router-link>
            </div>
          </div>

          <!-- Secondary Nav -->
          <div class="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <!-- Search -->
            <div class="relative">
              <input
                type="text"
                placeholder="Search dishes..."
                class="w-64 rounded-full border-gray-300 pl-10 pr-4 py-1.5 focus:border-primary focus:ring-primary text-sm"
              />
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
            </div>

            <!-- Cart -->
            <router-link
              to="/cart"
              class="relative p-2 text-gray-600 hover:text-gray-900"
            >
              <span class="sr-only">Cart</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span class="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary rounded-full">
                0
              </span>
            </router-link>

            <!-- User Menu -->
            <div class="relative" v-if="isAuthenticated">
              <button
                type="button"
                class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <span class="sr-only">Open user menu</span>
                <div class="h-8 w-8 rounded-full bg-gray-200"></div>
              </button>
              <!-- Dropdown menu -->
            </div>
            <template v-else>
              <router-link
                to="/login"
                class="text-sm font-medium text-gray-900 hover:text-primary"
              >
                Sign in
              </router-link>
              <router-link
                to="/register"
                class="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Sign up
              </router-link>
            </template>
          </div>

          <!-- Mobile menu button -->
          <div class="flex items-center sm:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span class="sr-only">Open main menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <router-view v-slot="{ Component }">
      <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0"
        enter-to-class="transform opacity-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100"
        leave-to-class="transform opacity-0"
      >
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200">
      <div class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
          <!-- Company -->
          <div>
            <h3 class="text-sm font-semibold text-gray-900">Company</h3>
            <ul class="mt-4 space-y-4">
              <li>
                <a href="#" class="text-sm text-gray-600 hover:text-gray-900">About</a>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-600 hover:text-gray-900">Careers</a>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-600 hover:text-gray-900">Press</a>
              </li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <h3 class="text-sm font-semibold text-gray-900">Support</h3>
            <ul class="mt-4 space-y-4">
              <li>
                <a href="#" class="text-sm text-gray-600 hover:text-gray-900">Help Center</a>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-600 hover:text-gray-900">Contact Us</a>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-600 hover:text-gray-900">FAQs</a>
              </li>
            </ul>
          </div>

          <!-- Legal -->
          <div>
            <h3 class="text-sm font-semibold text-gray-900">Legal</h3>
            <ul class="mt-4 space-y-4">
              <li>
                <a href="#" class="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-600 hover:text-gray-900">Terms of Service</a>
              </li>
              <li>
                <a href="#" class="text-sm text-gray-600 hover:text-gray-900">Cookie Policy</a>
              </li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div>
            <h3 class="text-sm font-semibold text-gray-900">Stay Updated</h3>
            <p class="mt-4 text-sm text-gray-600">Subscribe to our newsletter for updates and special offers.</p>
            <form class="mt-4">
              <div class="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  class="min-w-0 flex-1 rounded-l-md border-gray-300 px-4 py-2 text-sm focus:border-primary focus:ring-primary"
                />
                <button
                  type="submit"
                  class="-ml-px inline-flex items-center rounded-r-md border border-primary bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="mt-12 border-t border-gray-200 pt-8">
          <p class="text-center text-sm text-gray-600">
            &copy; {{ new Date().getFullYear() }} BonPlat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isAuthenticated = ref(false) // This will be connected to auth store later
</script>
