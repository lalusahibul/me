<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div>
    <Navbar />
    <section id="home" class="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 class="text-4xl font-bold">Welcome to My Portfolio 🚀</h1>
    </section>

    <section id="about" class="min-h-screen flex items-center justify-center bg-white">
      <p class="max-w-lg text-lg">Aboutme section.</p>
    </section>

    <section id="projects" class="min-h-screen flex items-center justify-center bg-gray-100">
      <p class="max-w-lg text-lg">Project list section.</p>
    </section>

    <section id="contact" class="min-h-screen flex items-center justify-center bg-white">
      <p class="max-w-lg text-lg">Contact section</p>
    </section>
  </div>
</template>
