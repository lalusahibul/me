<template>
  <div class="bg-[#101A2C] text-[#EDF6FF] font-mono min-h-screen selection:bg-[#45D6E8] selection:text-[#101A2C]">
    
    <!-- ================= HOME SECTION ================= -->
    <section id="home" class="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(#1B2B45_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none"></div>

      <div class="max-w-4xl w-full mx-auto text-center z-10 space-y-6 sm:space-y-8">
        
        <div class="inline-flex items-center gap-3 bg-[#1B2B45] border-2 sm:border-4 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-left">
          <div class="relative flex-shrink-0">
            <div class="w-12 h-12 bg-[#101A2C] border-2 border-[#45D6E8] p-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <img src="/images/ibul.webp" alt="Profile Bambang" class="w-full h-full object-cover" />
            </div>
            <span class="absolute -bottom-2 -right-1 bg-[#45D6E8] text-[#101A2C] font-pixel font-black text-[6px] px-1 border border-black uppercase">
              LV.99
            </span>
          </div>

          <div class="flex flex-col pr-2">
            <div class="flex items-center gap-1.5 mb-1">
              <span class="w-2 h-2 bg-[#45D6E8] animate-ping"></span>
              <span class="font-pixel text-[#EDF6FF] font-black text-[11px] sm:text-[11px] tracking-wider uppercase">
                 NoobMaster69
              </span>
            </div>

            <div class="flex items-center gap-2">
              <span class="text-[10px] text-[#9D8DF1] font-bold">HP</span>
              <div class="w-24 sm:w-32 bg-[#101A2C] h-2.5 border border-black p-0.5 flex gap-0.5">
                <div class="bg-[#9D8DF1] h-full w-full"></div>
                <div class="bg-[#9D8DF1] h-full w-full"></div>
                <div class="bg-[#9D8DF1] h-full w-full"></div>
                <div class="bg-[#1B2B45] h-full w-full"></div>
              </div>
              <span class="text-[9px] text-gray-400 font-bold">75%</span>
            </div>
          </div>
        </div>

        <div class="bg-[#1B2B45] border-4 border-[#EDF6FF] p-5 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(69,214,232,0.3)] sm:shadow-[8px_8px_0px_0px_rgba(69,214,232,0.3)] relative">
          <div class="absolute -top-1.5 -left-1.5 w-3 h-3 sm:w-4 sm:h-4 bg-[#45D6E8]"></div>
          <div class="absolute -top-1.5 -right-1.5 w-3 h-3 sm:w-4 sm:h-4 bg-[#45D6E8]"></div>
          <div class="absolute -bottom-1.5 -left-1.5 w-3 h-3 sm:w-4 sm:h-4 bg-[#45D6E8]"></div>
          <div class="absolute -bottom-1.5 -right-1.5 w-3 h-3 sm:w-4 sm:h-4 bg-[#45D6E8]"></div>

          <h1 class="text-2xl sm:text-4xl md:text-5xl font-black text-[#EDF6FF] tracking-wider mb-3 sm:mb-4 uppercase drop-shadow-[0_2px_0_rgba(0,0,0,1)]">
            Hi, I'm <span class="text-[#45D6E8] animate-pulse">Lalu Sahibul</span>!
          </h1>
          
          <p class="text-base sm:text-xl md:text-2xl text-[#539BF5] font-bold mb-4 sm:mb-6">
            &gt; <span class="text-[#9D8DF1]">{{ currentRole }}</span><span class="animate-ping">_</span>
          </p>

          <p class="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed border-t-2 border-dashed border-[#101A2C] pt-4">
            I like coding and playing games, and sometimes I even think about starting a catfish farm.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
          <a 
            href="#projects" 
            class="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#45D6E8] hover:bg-[#3bc4d4] text-[#101A2C] font-black text-sm sm:text-base uppercase tracking-wider border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all text-center"
          >
            View My Projects
          </a>
          
          <a 
            href="#contact" 
            class="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#539BF5] hover:bg-[#4387e3] text-[#101A2C] font-black text-sm sm:text-base uppercase tracking-wider border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all text-center"
          >
            Contact Me
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 text-left">
          <div class="bg-[#1B2B45] border-2 border-[#101A2C] p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <span class="text-[10px] sm:text-xs text-gray-400 block uppercase">Class / Role</span>
            <span class="text-[#45D6E8] font-bold text-xs sm:text-sm">Full-Stack Dev</span>
          </div>
          <div class="bg-[#1B2B45] border-2 border-[#101A2C] p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <span class="text-[10px] sm:text-xs text-gray-400 block uppercase">Main Weapons</span>
            <span class="text-[#539BF5] font-bold text-xs sm:text-sm">Laravel, Vue, Next.js</span>
          </div>
          <div class="bg-[#1B2B45] border-2 border-[#101A2C] p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <span class="text-[10px] sm:text-xs text-gray-400 block uppercase">Status</span>
            <span class="text-[#9D8DF1] font-bold text-xs sm:text-sm">Ready For Hire</span>
          </div>
        </div>

      </div>
    </section>

    <!-- ================= PROJECTS SECTION ================= -->
    <section id="projects" class="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t-4 border-dashed border-[#1B2B45]">
      
      <div class="text-center mb-12">
        <div class="inline-block bg-[#539BF5] text-[#101A2C] font-black text-xs sm:text-sm px-3 py-1 mb-2 border-2 border-black uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          QUEST LOG
        </div>
        <h2 class="text-2xl sm:text-4xl font-black text-[#EDF6FF] tracking-wider uppercase drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
          Featured Projects
        </h2>
        <p class="text-xs sm:text-sm text-gray-300 mt-2">List of Completed Missions and Applications.</p>
      </div>

      <div class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold border-2 border-black uppercase transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
            activeCategory === category 
              ? 'bg-[#45D6E8] text-[#101A2C] translate-x-0.5 translate-y-0.5 shadow-none' 
              : 'bg-[#1B2B45] text-gray-300 hover:bg-[#233856]'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="bg-[#1B2B45] border-4 border-black p-4 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(69,214,232,0.5)] transition-all duration-200 group"
        >
          <div>
<div class="flex justify-between items-center mb-3">
  <span class="text-[10px] sm:text-xs px-2 py-0.5 bg-[#101A2C] text-[#539BF5] border border-[#101A2C] font-bold uppercas">
    QUEST #0{{ project.id }}
  </span>

  <span 
    :class="[
      'text-[10px] sm:text-xs font-bold flex items-center gap-1 uppercase',
      project.status === 'CLEARED' ? 'text-[#45D6E8]' : 
      project.status === 'ON GOING' ? 'text-yellow-400' : 'text-red-500'
    ]"
  >
    <span 
      :class="[
        'w-2 h-2 rounded-full animate-pulse',
        project.status === 'CLEARED' ? 'bg-[#45D6E8]' : 
        project.status === 'ON GOING' ? 'bg-yellow-400' : 'bg-red-500'
      ]"
    ></span> 
    {{ project.status }}
  </span>
</div>

            <div class="relative bg-[#101A2C] border-2 border-[#101A2C] mb-4 overflow-hidden aspect-video flex items-center justify-center group-hover:border-[#45D6E8] transition-colors">
              <img 
                v-if="project.image" 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div v-else class="text-center p-4">
                <span class="text-3xl sm:text-4xl block mb-1">🕹️</span>
                <span class="text-[10px] text-gray-500 uppercase font-bold">IMAGE PREVIEW</span>
              </div>
            </div>

            <h3 class="text-lg sm:text-xl font-black text-[#EDF6FF] group-hover:text-[#45D6E8] transition-colors mb-2">
              {{ project.title }}
            </h3>

            <p class="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed line-clamp-3">
              {{ project.description }}
            </p>
          </div>

          <div>
            <div class="flex flex-wrap gap-1.5 mb-5">
              <span 
                v-for="tech in project.tags" 
                :key="tech"
                class="text-[10px] sm:text-xs bg-[#101A2C] text-[#9D8DF1] px-2 py-0.5 border border-[#101A2C] font-semibold"
              >
                #{{ tech }}
              </span>
            </div>

            <div class="grid grid-cols-2 gap-2 pt-2 border-t border-[#101A2C]">
              <a 
                :href="project.demoUrl" 
                target="_blank"
                class="text-center py-2 bg-[#45D6E8] hover:bg-[#3bc4d4] text-[#101A2C] font-bold text-xs uppercase border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
              >
                Demo
              </a>
              <a 
                :href="project.githubUrl" 
                target="_blank"
                class="text-center py-2 bg-[#101A2C] hover:bg-[#1B2B45] text-[#EDF6FF] font-bold text-xs uppercase border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
              >
                Code
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>

    <!-- ================= CONTACT SECTION ================= -->
    <section id="contact" class="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t-4 border-dashed border-[#1B2B45]">
      
      <div class="text-center mb-12">
        <div class="inline-block bg-[#9D8DF1] text-[#101A2C] font-black text-xs sm:text-sm px-3 py-1 mb-2 border-2 border-black uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          NPC / CONTACT POINT
        </div>
        <h2 class="text-2xl sm:text-4xl font-black text-[#EDF6FF] tracking-wider uppercase drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
          Connect & Send Message
        </h2>
        <p class="text-xs sm:text-sm text-gray-300 mt-2">Connect with me on social media, or send me an email directly.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div class="lg:col-span-5 space-y-4">
          
          <div class="bg-[#1B2B45] border-4 border-[#EDF6FF] p-4 sm:p-6 shadow-[6px_6px_0px_0px_rgba(157,141,241,0.4)] relative mb-6">
            <h3 class="text-base sm:text-lg font-black text-[#539BF5] uppercase mb-2 flex items-center gap-2">
            Communication Nodes
            </h3>
            <p class="text-xs text-gray-300 leading-relaxed">
            Connect via social media or professional platforms below for collaborations and project discussions.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            
            <!-- Instagram -->
            <a 
              href="https://instagram.com/lalusahibul_" 
              target="_blank" 
              class="flex items-center justify-between p-3 bg-[#1B2B45] hover:bg-[#9D8DF1] hover:text-[#101A2C] text-[#EDF6FF] font-bold text-xs sm:text-sm border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all group"
            >
              <span class="flex items-center gap-3">
                <i class="fab fa-instagram text-lg sm:text-xl"></i>
                <span class="uppercase">Instagram</span>
              </span>
              <span class="text-[#45D6E8] group-hover:text-[#101A2C]">&gt; @lalusahibul_</span>
            </a>

            <!-- Facebook -->
            <a 
              href="https://facebook.com/lalusahibulprw" 
              target="_blank" 
              class="flex items-center justify-between p-3 bg-[#1B2B45] hover:bg-[#539BF5] hover:text-[#101A2C] text-[#EDF6FF] font-bold text-xs sm:text-sm border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all group"
            >
              <span class="flex items-center gap-3">
                <i class="fab fa-facebook text-lg sm:text-xl"></i>
                <span class="uppercase">Facebook</span>
              </span>
              <span class="text-[#539BF5] group-hover:text-[#101A2C]">&gt; Lalu Sahibul</span>
            </a>

            <!-- GitHub -->
            <a 
              href="https://github.com/lalusahibul" 
              target="_blank" 
              class="flex items-center justify-between p-3 bg-[#1B2B45] hover:bg-[#101A2C] text-[#EDF6FF] font-bold text-xs sm:text-sm border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all group"
            >
              <span class="flex items-center gap-3">
                <i class="fab fa-github text-lg sm:text-xl"></i>
                <span class="uppercase">GitHub</span>
              </span>
              <span class="text-[#45D6E8] group-hover:text-[#EDF6FF]">&gt; lalusahibul</span>
            </a>

            <!-- Email -->
            <a 
              href="mailto:lalusahibulpurwa@gmail.com" 
              class="flex items-center justify-between p-3 bg-[#1B2B45] hover:bg-[#539BF5] hover:text-[#101A2C] text-[#EDF6FF] font-bold text-xs sm:text-sm border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all group"
            >
              <span class="flex items-center gap-3">
                <i class="fas fa-envelope text-lg sm:text-xl"></i>
                <span class="uppercase">Email</span>
              </span>
              <span class="text-[#539BF5] group-hover:text-[#101A2C]">&gt; Send Mail</span>
            </a>

            <!-- TikTok -->
            <a 
              href="https://tiktok.com/@singularityy._" 
              target="_blank" 
              class="flex items-center justify-between p-3 bg-[#1B2B45] hover:bg-[#45D6E8] hover:text-[#101A2C] text-[#EDF6FF] font-bold text-xs sm:text-sm border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all group"
            >
              <span class="flex items-center gap-3">
                <i class="fab fa-tiktok text-lg sm:text-xl"></i>
                <span class="uppercase">TikTok</span>
              </span>
              <span class="text-[#45D6E8] group-hover:text-[#101A2C]">&gt; @singularityy._</span>
            </a>

            <!-- X -->
            <a 
              href="https://x.com/lalusahibulprw" 
              target="_blank" 
              class="flex items-center justify-between p-3 bg-[#1B2B45] hover:bg-[#45D6E8] hover:text-[#101A2C] text-[#EDF6FF] font-bold text-xs sm:text-sm border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all group"
            >
              <span class="flex items-center gap-3">
                <i class="fab fa-x-twitter text-lg sm:text-xl"></i>
                <span class="uppercase">X</span>
              </span>
              <span class="text-[#45D6E8] group-hover:text-[#101A2C]">&gt; @lalusahibulprw</span>
            </a>

          </div>

        </div>

        <!-- Right Column: Interactive Message Box Form -->
        <div class="lg:col-span-7 bg-[#1B2B45] border-4 border-black p-5 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
          
          <!-- Terminal / Dialogue Box Title Bar -->
          <div class="bg-[#101A2C] border-2 border-[#101A2C] p-2 mb-6 flex justify-between items-center">
            <span class="text-xs font-bold text-[#45D6E8] uppercase tracking-widest flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-red-500"></span>
              <span class="w-2 h-2 rounded-full bg-yellow-500"></span>
              <span class="w-2 h-2 rounded-full bg-[#45D6E8]"></span>
              TRANSMIT_MESSAGE.EXE
            </span>
            <span class="text-[10px] text-gray-400">STATUS: ONLINE</span>
          </div>

          <form @submit.prevent="sendMessage" class="space-y-4">
            <!-- Name Input -->
            <div>
              <label class="block text-xs font-bold uppercase text-[#539BF5] mb-1">
                &gt; Player / Sender Name *
              </label>
              <input 
                v-model="form.name"
                type="text" 
                required
                placeholder="Masukkan nama Anda..."
                class="w-full bg-[#101A2C] border-2 border-[#101A2C] p-3 text-xs sm:text-sm text-[#45D6E8] font-mono focus:border-[#45D6E8] focus:outline-none transition-colors placeholder-gray-500"
              />
            </div>

            <!-- Email Input -->
            <div>
              <label class="block text-xs font-bold uppercase text-[#539BF5] mb-1">
                &gt; Return Address (Email) *
              </label>
              <input 
                v-model="form.email"
                type="email" 
                required
                placeholder="email@domain.com..."
                class="w-full bg-[#101A2C] border-2 border-[#101A2C] p-3 text-xs sm:text-sm text-[#45D6E8] font-mono focus:border-[#45D6E8] focus:outline-none transition-colors placeholder-gray-500"
              />
            </div>

            <!-- Subject Input -->
            <div>
              <label class="block text-xs font-bold uppercase text-[#539BF5] mb-1">
                &gt; Quest Subject
              </label>
              <input 
                v-model="form.subject"
                type="text" 
                placeholder="Collaboration / Project / Question..."
                class="w-full bg-[#101A2C] border-2 border-[#101A2C] p-3 text-xs sm:text-sm text-[#45D6E8] font-mono focus:border-[#45D6E8] focus:outline-none transition-colors placeholder-gray-500"
              />
            </div>

            <!-- Message Input -->
            <div>
              <label class="block text-xs font-bold uppercase text-[#539BF5] mb-1">
                &gt; Transmission Body *
              </label>
              <textarea 
                v-model="form.message"
                rows="4" 
                required
                placeholder="Tuliskan detail pesan atau deskripsi project di sini..."
                class="w-full bg-[#101A2C] border-2 border-[#101A2C] p-3 text-xs sm:text-sm text-[#45D6E8] font-mono focus:border-[#45D6E8] focus:outline-none transition-colors placeholder-gray-500 resize-none"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="w-full py-3 sm:py-4 bg-[#539BF5] hover:bg-[#4387e3] text-[#101A2C] font-black text-sm sm:text-base uppercase tracking-wider border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2"
            >
              <span>{{ isSubmitting ? 'SENDING...' : 'TRANSMIT MESSAGE' }}</span>
            </button>

            <!-- Feedback Status -->
            <div v-if="submitStatus" class="p-3 bg-[#101A2C] border-2 border-[#45D6E8] text-[#45D6E8] text-xs font-bold text-center uppercase">
              {{ submitStatus }}
            </div>
          </form>

        </div>

      </div>

      <!-- FOOTER -->
      <div class="mt-16 text-center text-xs text-gray-400 font-mono">
        <p>© {{ new Date().getFullYear() }} LALU SAHIBUL PURWA • ALL RIGHTS RESERVED.</p>
        <p class="mt-1 text-[10px] text-gray-500">MADE WITH VUE 3, TAILWIND CSS & 8-BIT PIXEL POWER</p>
      </div>

    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const roles = ['Full-Stack Developer', 'Open Source Enthusiast', 'IOT and Micro Controller']
const currentRole = ref(roles[0])
let roleIndex = 0
let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length
    currentRole.value = roles[roleIndex]
  }, 2500)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

const categories = ['ALL', 'FULL-STACK', 'PACKAGE', 'FRONTEND']
const activeCategory = ref('ALL')

const projects = ref([
  {
    id: 1,
    title: 'GitHub Profile Roaster',
    description: 'An interactive web application that generates GitHub profile analysis and roasts using Gemini AI.',
    tags: ['Next.js', 'Gemini API', 'Tailwind', 'Github API'],
    category: 'FRONTEND',
    image: '/images/githubroasting.PNG',
    demoUrl: 'https://github-roasting-seven.vercel.app',
    githubUrl: 'https://github.com/lalusahibul/github-roasting/',
    status: 'CLEARED'
  },
  {
    id: 2,
    title: 'Laravel Fake NIK Generator',
    description: 'An open-source PHP package for generating dummy Indonesian Identity Numbers (NIK) for Laravel application testing.',
    tags: ['PHP', 'Laravel', 'Package', 'Open Source'],
    category: 'PACKAGE',
    image: '/images/logo-ibul.png',
    demoUrl: '#',
    githubUrl: 'https://github.com/lalusahibul/fakenik',
    status: 'ON GOING'
  },
  {
    id: 3,
    title: 'Sistem Pengaduan Masyarakat',
    description: 'A public complaint system designed to provide an easy platform for citizens to submit reports to officers. Officers can then respond to and process these public reports.',
    tags: ['Laravel', 'MySQL', 'CSS', 'JavaScript', 'PHP'],
    category: 'FULL-STACK',
    image: '/images/logo-ibul.png',
    demoUrl: '#',
    githubUrl: 'https://github.com/lalusahibul/pengaduanMasyarakat',
    status: 'CLEARED'
  },
  {
    id: 4,
    title: 'Morse Converter',
    description: 'A website to convert Morse code to text and vice versa.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    category: 'FRONTEND',
    image: '/images/morseconverter.PNG',
    demoUrl: 'https://lalusahibul.github.io/morseConverter/',
    githubUrl: 'https://github.com/lalusahibul/morseConverter',
    status: 'CLEARED'
  },
  {
    id: 5,
    title: 'animeKu',
    description: 'Manga reading website for wibu.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    category: 'FRONTEND',
    image: '/images/animeku.PNG',
    demoUrl: 'https://animeku-ten.vercel.app/',
    githubUrl: 'https://github.com/lalusahibul/animeKu',
    status: 'ON GOING'
  },
  {
    id: 6,
    title: 'FindOutgram',
    description: `To see who follows you and who doesn't follow you back on IG based on Instagram data.`,
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    category: 'FRONTEND',
    image: '/images/findoutgram.PNG',
    demoUrl: 'https://lalusahibul.github.io/ig_followersChecker_v2/',
    githubUrl: 'https://github.com/lalusahibul/ig_followersChecker_v2',
    status: 'ON GOING'
  },
])

const filteredProjects = computed(() => {
  if (activeCategory.value === 'ALL') {
    return projects.value
  }
  return projects.value.filter(p => p.category === activeCategory.value)
})

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref('')

const sendMessage = () => {
  isSubmitting.value = true
  
  setTimeout(() => {
    isSubmitting.value = false
    submitStatus.value = 'MESSAGE TRANSMITTED SUCCESSFULLY!'
    
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    setTimeout(() => {
      submitStatus.value = ''
    }, 4000)
  }, 1500)
}
</script>