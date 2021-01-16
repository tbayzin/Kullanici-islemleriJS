<template>
	<v-container
		fluid
		id="cont">

		<v-row lg="12">
			<v-app-bar
				dark
				flat
			>
<!--nav barda bulunan 3 çizgiye tıklandığında sidebarın gösterilip gizleneceği fonksiyon çalışıyor.-->
				<v-app-bar-nav-icon @click="showOrHideMenu"></v-app-bar-nav-icon>
			</v-app-bar>
		</v-row>
		<v-row lg="12">
			<v-col lg="2">
				<v-card
					flat
				>
<!--					Side Barda bulunan sayfalara tıklandığında url adresine göre ilgili sayfaya yönlendirme yapılması için item.url i döndürüyoruz.-->
					<v-navigation-drawer
						permanent
						:dark="true"
						:style="displayNavBar"
					>
						<v-list
							nav
						>
							<v-list-item
								v-for="item in items"
								:key="item"
							>
<!--								alınan linki burada entegre edip sayfaya gitmesi için alıyoruz-->
								<router-link
									:to="{path:`${item.url}`}"
								>
									<v-list-item link>
										<v-list-item-icon>
											<v-icon>{{ item.icon }}</v-icon>
										</v-list-item-icon>
										<v-list-item-title>{{ item.title }}</v-list-item-title>
									</v-list-item>
								</router-link>
							</v-list-item>
						</v-list>
					</v-navigation-drawer>
				</v-card>
			</v-col>
			<v-col lg="10">
<!--				main.js içinde verdiğimiz path isimlerine göre sayfalara yönlendirmeyi sağlaması için router-view tagını açıyoruz.-->
				<router-view></router-view>
			</v-col>
		</v-row>


	</v-container>



</template>

<script>
// import Dashboard from "@/components/Dashboard";
export default {
	name: 'App',

	components: {
		// Dashboard

	},
	data() {
		return {
			//side bar itemleri,iconları ve url uzantılarını buradan alıyoruz.
			items: [
				{title: 'Anasayfa', icon: 'mdi-view-dashboard', url: '/'},
				{title: 'Kişi Ekle', icon: 'mdi-account-plus', url: '/kisiEkle'},
				{title: 'kişi Listele', icon: 'mdi-account-group',url:'/kisiListesi'},
				{title: 'Kişi Yüz Arama', icon: 'mdi-attachment',url:'kisiYuzSorgulama'},
			],
			displayNavBar: "display:none"
		}
	},
	methods: {
		//nav barda bulunan üç çizgili icona tıkladığımızda side barın açılıp açılmayacağını bu fonksiyon içerisinde kontrol ediyoruz.
		showOrHideMenu() {
			if (this.displayNavBar === "display:none") {
				this.displayNavBar = "display:block"
			} else {
				this.displayNavBar = "display:none"
			}
		}
	}


};
</script>

<style>

</style>
