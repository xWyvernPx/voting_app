<script setup lang="ts">
import { reactive, ref } from "vue";
import {ChevronLeftIcon ,DashboardIcon} from "vue-tabler-icons"
import SidebarItem from "./SidebarItem.vue"
const sidebarItems = ref([
    {name : "Home" , path : "/" , icon : DashboardIcon},
    {name : "Groups" , path : "/groups", icon : DashboardIcon},
    {name : "Voting" , path : "/voting", icon : DashboardIcon},
    {name : "Fund" , path : "/fund", icon : DashboardIcon},
])

</script>
<template>
    <div class="columns-1 w-full h-full bg-background text-main p-8">
        <h1 class="text-4xl">FFE CRM</h1>
        <div class="flex flex-col gap-2 mt-5">
            <sidebar-item v-for="item in sidebarItems" :item="item">
              
            </sidebar-item>
        </div>
    </div>
</template>
<style>
</style>