import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      name: 'luis',
      email: 'luis@example.com',
      senha: 'luis123A',
    }
  },
  mutations: {
    alterPassword(state, payload) {
      state.user.senha = payload;
      console.log ("senha alterada")
    }
  },
  actions: {
  },
  modules: {
  }
})
