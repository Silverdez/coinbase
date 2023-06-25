import Vue from "vue";
import { createStore, Store } from 'vuex'
import axios from "axios";

export default new Store({
  state: {
    crypto: [],
    historical: [],
  },
  actions: {
    async fetchHistorical({ commit }) {
      try {
        const response = await axios.get(
          "https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-12-31"
        );
        commit("setHistorical", response.data.bpi);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchCrypto({ commit }) {
      try {
        const response = await axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        commit("setCrypto", response.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  mutations: {
    setCrypto: (state, payload) => {
      state.crypto = payload;
    },
    setHistorical: (state, payload) => {
      state.historical = payload;
    }
  },
  getters: {
    getCrypto: (state) => state.crypto,
    getHistorical: (state) => state.historical,
  },
  modules: {},
});
