<script setup lang="ts">

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, reactive ,ref} from 'vue';
import {RouterLink,RouterView} from 'vue-router'
import Sidebar from './components/common/sidebar/Sidebar.vue'
import HelloWorld from './components/HelloWorld.vue'


</script>

<template>
  <Suspense>
  <div class="h-full grid grid-cols-appLayout">
    <Sidebar></Sidebar>
    <div class="columns-2 ">
      <RouterView></RouterView>
    </div>
  </div>
  <template #fallback>
    <div>Loading...</div>
  </template>
</Suspense>
</template>

<style scoped>
</style>
