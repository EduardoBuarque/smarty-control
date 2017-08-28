
require('./bootstrap');

import Vue from 'vue';
import router from './router';
import resource from 'vue-resource';
import store from './vuex';

Vue.use(resource);

const app = new Vue({
    el: '#app',
    components: {},
    router,
    store
});
