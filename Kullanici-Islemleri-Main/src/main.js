import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Dashboard from "@/components/Dashboard";
import kisiEkle from "@/components/kisiEkle";
import kisiListesi from "@/components/kisiListesi";
import kisiYuzSorgulama from "@/components/kisiYuzSorgulama";



Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
	//tanımladığımız rotaları spesifikleştirip ilgili url yönlendirmesi için eşleştirmeleri sağlıyoruz.
	routes: [
		{
			path: '/',
			components: {
				default: Dashboard,
			},

		},
		{
			path: '/kisiEkle',
			components: {
				default: kisiEkle
			}
		},
		{
			path: '/kisiListesi',
			components: {
				default: kisiListesi
			}
		},
		{
			path:'/kisiYuzSorgulama',
			components:{
				default:kisiYuzSorgulama
			}
		}

	],
});


new Vue({
	vuetify,
	render: h => h(App),
	router,
	components: {App},


}).$mount('#app')
