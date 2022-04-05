import { createStore } from 'vuex'

export default createStore({
  state: {
    contadora: 0
  },
  getters: {
    cuadrado (state) {
      return state.contadora * state.contadora
    }
  },
  mutations: {
    subirContador (state, random) {
      state.contadora += random
    },
    bajarContador (state, random) {
      state.contadora -= random
    }
  },
  actions: {
    async subirContador ({ commit }) {
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      const results = await res.json()
      console.log(results)
      commit('subirContador', results)
    },
    async bajarContador ({ commit }) {
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      const results = await res.json()
      console.log(results)
      commit('bajarContador', results)
    }
  },
  modules: {
  }
})
