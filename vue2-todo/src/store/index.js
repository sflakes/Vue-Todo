import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "SMA 1 INDOG",
    teachers: [
      {
        nama: "agus salim",
        title: "guru",
        done: false,
    },
      {
        nama: "muhammad yanto",
        titile: "kepala sekolah",
        done: false,
    }]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
