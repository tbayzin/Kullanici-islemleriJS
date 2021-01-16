import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Kisilerilistele from './components/Kisilerilistele.vue';
import Dashboard from './components/Dashboard.vue'

Vue.use(VueRouter);

const routes = [
	{path: '/kisilerilistele', component: Kisilerilistele},
	{path: '/', component: Dashboard}
];

	const router = new VueRouter({
		routes
	});
Vue.config.productionTip = false

new Vue({
	el: '#app',
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
