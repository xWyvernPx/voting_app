<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface SidebarProps {
    item : {
        name : string
        path : string
    }
}
    defineProps<SidebarProps>();
    
</script>
<template>
        <RouterLink class="p-4 hover:bg-subbackground text-main text-xl hover:text-main rounded-md" :to="item.path">
            {{item.name}}   
        </RouterLink>
</template>
