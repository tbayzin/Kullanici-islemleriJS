import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'

import Dashboard from "@/components/Dashboard";
import kisiEkle from "@/components/kisiEkle";
import kisiListesi from "@/components/kisiListesi";
import kisiYuzSorgulama from "@/components/kisiYuzSorgulama";
// import kisiEkle from "@/components/kisiEkle";

Vue.use(VueRouter);

Vue.config.productionTip = false

// const routes =[
//   {path:'/kisiEkle',components: kisiEkle,name:'kisiEkle'},
//   {path: '/dashboard',components: Dashboard,name:'dashboard'}
//
// ]

const router = new VueRouter({
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

	]
});


new Vue({
	vuetify,
	render: h => h(App),
	router
}).$mount('#app')
