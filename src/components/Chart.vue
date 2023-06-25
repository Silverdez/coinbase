<template>
  <v-container>
    <charts :constructor-type="'chart'" :options="chartOptions" />
  </v-container>

</template>

<script lang="ts">
  import {ref} from "vue";
  import {mapActions, mapGetters} from "vuex";

  const chartOptions = ref({
    chart: {
      type: 'line',
      backgroundColor: 'none',
      borderColor: 'none',
      className: 'dark-container',
    },
    title: {
      text: 'Historical Price'
    },
    series: [{
      type: 'area',
      name: 'BTC Price',
    }]
  })
  export default {
    name: 'Chart',
    methods: {
      ...mapActions(['fetchCrypto', 'fetchHistorical']),
      updateChart() {
        this.$nextTick(() => {
          chartOptions.value.series[0].data = JSON.stringify(this.getHistorical).replace(/"/g, '').split(':').splice(1).map((item) => parseFloat(item))
          chartOptions.value.xAxis = JSON.stringify(this.getHistorical).replace(/"/g, '').split(':').splice(0, 1).map((item) => item.replace('{', '').replace('}', ''))
        })
      },
    },
    beforeUpdate () {
      this.updateChart()
    },
    beforeMount () {
      this.updateChart()
    },
    mounted () {
      this.fetchCrypto()
      this.fetchHistorical()
      if (this.getHistorical) {
        this.updateChart()
      }
    },
    computed: {
      ...mapGetters(['getCrypto', 'getHistorical']),
    },

    data(){
      return {
        chartOptions
      }
    }
  }


</script>
