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
    answers: false,
    step_1_valid: false,
    step_2_valid: false,
  },
  getters: {
    getUserInfo: (state) => {
      return state.user_info;
    },
    getAnswers: (state) => {
      return state.answers;
    },
    step1Valid: (state) => {
      return state.step_1_valid;
    },
    step2Valid: (state) => {
      return state.step_2_valid;
    },
  },
  mutations: {
    SET_USER_INFO(state,payload) {
      state.user_info = payload;
    },
    SET_ANSWERS(state,payload) {
      state.answers = payload;
    },
    SET_STEP_1_VALID(state,payload) {
      state.step_1_valid = payload;
    },
    SET_STEP_2_VALID(state,payload) {
      state.step_2_valid = payload;
    },
    RESET_FORM(state) {
      state.step_2_valid = false;
      state.answers = false;
    },
  },
  actions: {
    setUserInfo({commit}, payload) {
      commit('SET_USER_INFO', payload);
    },
    setAnswers({commit}, payload) {
      commit('SET_ANSWERS', payload);
    },
    setStep1Valid({commit}, payload) {
      commit('SET_STEP_1_VALID', payload);
    },
    setStep2Valid({commit}, payload) {
      commit('SET_STEP_2_VALID', payload);
    },
    resetForm({commit}) {
      commit('RESET_FORM');
    },
  },
  modules: {
  },
  plugins: [vuexLocalStorage.plugin],
})
