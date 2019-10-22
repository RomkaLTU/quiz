import Vue from 'vue'
import VuexPersist from 'vuex-persist'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'quiz_store', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
});

export default new Vuex.Store({
  state: {
    user_info: false,
    step_1_valid: false,
  },
  getters: {
    getUserInfo: (state) => {
      return state.user_info;
    },
    step1Valid: (state) => {
      return state.step_1_valid;
    },
  },
  mutations: {
    SET_USER_INFO(state,payload) {
      state.user_info = payload;
    },
    SET_STEP_1_VALID(state,payload) {
      state.step_1_valid = payload;
    },
  },
  actions: {
    setUserInfo({commit}, payload) {
      commit('SET_USER_INFO', payload);
    },
    setStep1Valid({commit}, payload) {
      commit('SET_STEP_1_VALID', payload);
    },
  },
  modules: {
  },
  plugins: [vuexLocalStorage.plugin],
})
