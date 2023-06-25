<template>
  <v-container>
      <v-table class="table-historical">
        <thead>
          <tr>
            <th>Date</th>
            <th>Price</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(price, date) in getHistorical" :key="date" @click="" >
            <td>{{ date }}</td>
            <td>${{price.toFixed(2)}}</td>
            <td>
              <svg
                :class="{ sparkred: price < 0 }"
                class="sparkline"
              ></svg>
            </td>
          </tr>
        </tbody>
      </v-table>
  </v-container>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex'
import sparkline from "@fnando/sparkline";
export default {
  name: 'Tracker',
  methods: {
    ...mapActions(['fetchCrypto', 'fetchHistorical']),
  },
  mounted () {
    this.fetchCrypto()
    this.fetchHistorical()
  },
  beforeUpdate () {
    this.$nextTick(() => {
      function randNumbers() {
        let numbers = [];
        for (let i = 0; i < 20; i += 1) {
          numbers.push(Math.random() * 50);
        }
        return numbers;
      }
      document.querySelectorAll(".sparkline").forEach((svg) => {
        sparkline(svg, randNumbers());
      });
    })
  },
  computed: {
    ...mapGetters(['getCrypto', 'getHistorical']),
  },
  data () {
    return {
      images: {
        BTC: 'https://www.cryptocompare.com/media/19633/btc.png',
        IOT: 'https://www.cryptocompare.com/media/1383540/iota_logo.png',
        ETH: 'https://www.cryptocompare.com/media/20646/eth_logo.png',
        XMR: 'https://www.cryptocompare.com/media/19969/xmr.png',
        LTC: 'https://www.cryptocompare.com/media/19782/litecoin-logo.png'
      }
    }
  }
}
</script>
