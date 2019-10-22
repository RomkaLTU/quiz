import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { email } from 'vee-validate/dist/rules';
import { ValidationProvider } from 'vee-validate';
import { ValidationObserver } from 'vee-validate';

// Add the required rule
extend('required', {
  ...required,
  message: 'This field is required'
});

extend('email', {
  ...email,
  message: 'Provide valid email address'
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
