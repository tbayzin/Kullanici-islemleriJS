import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Trend from "vuetrend"

Vue.use(Trend)

//componentlerimizi import ediyoruz.
import Dashboard from "@/components/Dashboard";
import kisiEkle from "@/components/kisiEkle";
import kisiListesi from "@/components/kisiListesi";
import kisiYuzSorgulama from "@/components/kisiYuzSorgulama";
import Hakkinda from "@/components/Hakkinda";

Vue.use(VueRouter); //vue nun routerı kullanmasını sağlıyoruz.

Vue.config.productionTip = false

//router tanımlıyoruz.
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
			path: '/Hakkinda',
			components: {
				default: Hakkinda
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
