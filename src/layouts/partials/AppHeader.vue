<template>
    <v-app-bar>
        <v-app-bar-nav-icon @click="toggleShow" />
        <v-app-bar-title>
          <v-icon icon="mdi-circle-slice-4" />
          Coin Base
        </v-app-bar-title>
        <v-spacer />
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        show: false,
      };
    },
    methods: {
      toggleShow() {
        this.show = !this.show;
      }
    },
  };
</script>

<style scoped>

</style>
