<template>
  <nav class="bg-gray-800 text-white w-full fixed top-0 left-0 z-50">
    <div class="flex justify-between items-center h-16 px-4 md:px-8">
      <!-- Kiri: Logo (Desktop) / Burger (Mobile) -->
      <div class="flex items-center">
        <!-- Burger menu hanya muncul di mobile -->
         <button @click="isOpen = !isOpen" class="md:hidden mr-2 focus:outline-none bg-transparent transition-transform duration-300">
          <svg class="w-7 h-7 transform" :class="{ 'rotate-90': isOpen }" fill="none"
    stroke="currentColor"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path v-if="!isOpen" d="M4 6h16M4 12h16M4 18h16" />
    <path v-else d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
        <a href="/" class="text-xl font-bold hidden md:block"><img src="/images/logo-ibul.png" alt="Logo" class="h-12 w-12"></a>
      </div>
      <div class="hidden md:flex space-x-6">
        <a href="#home" class="hover:text-gray-300">Home</a>
        <a href="#about" class="hover:text-gray-300">About</a>
        <a href="#projects" class="hover:text-gray-300">Projects</a>
        <a href="#contact" class="hover:text-gray-300">Contact</a>
      </div>

      <!-- Logo di tengah -->
      <div class="md:hidden absolute left-1/2 transform -translate-x-1/2">
        <a href="/" class="text-lg font-bold"> <img src="/images/logo-ibul.png" alt="Logo" class="h-12 w-12"></a>
      </div>

      <!-- Profile Kanan -->
      <div class="flex items-center">
        <img
          src="/images/ibul.webp"
          alt="Profile"
          class="w-12 h-12 rounded-full border-2 border-blue-700 object-cover"
        />
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div v-if="isOpen" class="md:hidden bg-gray-700 px-4 pt-2 pb-4 space-y-2">
      <a href="#home" class="block hover:text-gray-300">Home</a>
      <a href="#about" class="block hover:text-gray-300">About</a>
      <a href="#projects" class="block hover:text-gray-300">Projects</a>
      <a href="#contact" class="block hover:text-gray-300">Contact</a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue"
const isOpen = ref(false)
</script>
