<template>
  <Highcharts />
  <Tracker />
</template>

<script lang="ts">

  import Tracker from "@/components/Tracker.vue";
  import Highcharts from "@/components/Chart.vue";
  import {mapActions, mapGetters} from "vuex";

  export default {
    name: 'App',
    components: {
      Tracker,
      Highcharts
    },
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire'
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Cryptocurrency Tracker',
        cryptocurrencies: [],
        historical: [],
        errors: []
      }
    },
  }
</script>
