<script setup>
import { slideChapters } from '../slides.config.js';
import { ref, computed } from 'vue';

// Extract slug from path like /slides/day2-xyz/
const regex = /^\/slides\/([^\/]+)(?:\/\d+)?\/?$/;
const pathParts = window.location.pathname.match(regex);
const currentSlug = pathParts ? pathParts[1] : null;

const next = computed(() => {
  const currentIndex = slideChapters.findIndex((s) => s.slug === currentSlug);
  return slideChapters[currentIndex + 1];
});
</script>

<template>
  <div class="text-center space-y-6">
    <h1 class="text-3xl font-bold">🎉 You're done!</h1>
    <p class="text-gray-600 text-lg">Choose your next step:</p>

    <div class="grid grid-cols-2 gap-4 justify-center">
      <a
        v-if="next"
        :href="'/slides/' + next.slug + '/'"
        class="block p-4 rounded-lg bg-blue-100 border border-blue-400 hover:bg-blue-200"
      >
        👉 Next: {{ next.title }}
      </a>

      <a
        href="/"
        class="block p-4 rounded-lg bg-gray-100 border border-gray-400 hover:bg-gray-200"
      >
        🏠 Back to All Slides
      </a>
    </div>
  </div>
</template>
