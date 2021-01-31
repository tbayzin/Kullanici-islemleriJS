<template>

		<v-app>
			<v-card>
				<v-app-bar
					dark
					tile
				>
					<!--nav barda bulunan 3 çizgiye tıklandığında sidebarın gösterilip gizleneceği fonksiyon çalışıyor.-->
					<v-app-bar-nav-icon @click="showOrHideMenu"></v-app-bar-nav-icon>
				</v-app-bar>
			</v-card>
			<v-row
			>
				<v-col class="col-lg-2"
				v-show="showMenu">
			<v-navigation-drawer
				:dark="true">

				<v-list
					flat
					rounded
				>
					<v-list-item-group>
						<v-list-item
							v-for="(item,i) in items"
							:key="i"
						>
							<!--alınan linki burada entegre edip sayfaya gitmesi için alıyoruz-->
							<router-link
								:to="{path:`${item.url}`}"
							>
								<v-list-item link>
									<v-list-item-icon>
										<v-icon v-text="item.icon"></v-icon>
									</v-list-item-icon>
									<v-list-item-title v-text="item.title"></v-list-item-title>
								</v-list-item>
							</router-link>
						</v-list-item>
					</v-list-item-group>
				</v-list>
			</v-navigation-drawer>
				</v-col>
				<v-col :class="showMenu ? 'lg-10' : 'lg-12'">
					<router-view></router-view>
				</v-col>
			</v-row>
			<!--				main.js içinde verdiğimiz path isimlerine göre sayfalara yönlendirmeyi sağlaması için router-view tagını açıyoruz.-->
		</v-app>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			//side bar itemleri,iconları ve url uzantılarını buradan alıyoruz.
			items: [
				{title: 'Anasayfa', icon: 'mdi-view-dashboard', url: '/'},
				{title: 'kişi Ekle', icon: 'mdi-account-plus', url: '/kisiEkle'},
				{title: 'kişi Listele', icon: 'mdi-account-group', url: '/kisiListesi'},
				{title: 'Kişi Yüz Arama', icon: 'mdi-attachment', url: 'kisiYuzSorgulama'},
				{title: 'Uygulama Hakkinda', icon: 'mdi-information', url: '/Hakkinda'},
			],
			showMenu:true,
		}
	},
	methods: {
		//nav barda bulunan üç çizgili icona tıkladığımızda side barın açılıp açılmayacağını bu fonksiyon içerisinde kontrol ediyoruz.
		showOrHideMenu() {
			if (this.showMenu) {
				this.showMenu=false

			} else {
				this.showMenu=true
			}
		}
	}


};
</script>

<style>

</style>
