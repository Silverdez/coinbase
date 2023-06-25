/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '../router'
import vuex from '../store'
import Highcharts from "highcharts";
import StockModule from "highcharts/modules/stock";
import HighchartsVue from "highcharts-vue";

// Types
import type { App } from 'vue'
StockModule(Highcharts);


export function registerPlugins (app: App) {
  loadFonts()
  app
    .use(vuetify)
    // @ts-ignore
    .use(HighchartsVue, {tagName: 'charts'})
    .use(router)
    .use(vuex)
}
