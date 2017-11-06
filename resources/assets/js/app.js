// require("babel-core").transform("code", {
//     plugins: ["transform-object-rest-spread"]
// });
require('babel-plugin-transform-object-rest-spread')
require('./bootstrap');

import Vue from 'vue';
import router from './router';
import resource from 'vue-resource';
import store from './vuex';

import Notifications from 'vue-notification'

Vue.use(resource);
Vue.use(Notifications);

const app = new Vue({
    el: '#app',
    components: {},
    router,
    store
});
