import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
const VueScrollTo = require('vue-scrollto');
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueScrollTo);

Vue.use(VueAxios, axios)

router.beforeEach((to, from, next) => {
  if ( store.getters["step2Valid"] && to.name !== 'step3' ) {
    next({name: 'step3'});
  } else {
    next();
  }
})

import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { email } from 'vee-validate/dist/rules';
import { ValidationProvider } from 'vee-validate';
import { ValidationObserver } from 'vee-validate';

// Add the required rule
extend('required', {
  ...required,
  message: 'Tapahtui virhe - täytä puuttuva kohta'
});

extend('email', {
  ...email,
  message: 'Tapahtui virhe - täytä puuttuva kohta'
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
