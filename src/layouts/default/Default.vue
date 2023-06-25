<template>
  <v-app>
    <app-header />
    <default-view />
    <app-footer />
  </v-app>
</template>

<script lang="ts" setup>
  import AppHeader from '@/layouts/partials/AppHeader.vue'
  import AppFooter from "@/layouts/partials/AppFooter.vue";
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>
