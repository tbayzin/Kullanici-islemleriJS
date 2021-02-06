<template>
	<v-app id="app">
		<v-card
		width="2000"
		height="950">

			<v-app-bar
				temporary
				dark
			>
				<v-app-bar-nav-icon
					@click.stop="drawer=!drawer">
				</v-app-bar-nav-icon>
			</v-app-bar>
			<v-navigation-drawer
				v-model="drawer"
				absolute
				bottom
				temporary
				dark
			>
				<v-list
					nav
					dense

				>
					<v-list-item-group
						v-model="group"
						active-class="deep-purple--text text--accent-4">
							<v-list-item
								v-for="(item,i) in items"
								:key="i">
								<router-link
									:to="{path:`${item.url}`}"
								>
									<v-list-item>
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
			<router-view></router-view>

		</v-card>
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
			],
			showMenu: true,
			drawer: false,
			group: null
		}
	},
	methods: {
		//nav barda bulunan üç çizgili icona tıkladığımızda side barın açılıp açılmayacağını bu fonksiyon içerisinde kontrol ediyoruz.
		showOrHideMenu() {
			if (this.showMenu) {
				this.showMenu = false

			} else {
				this.showMenu = true
			}
		}
	},
	watch: {
		group() {
			this.drawer = false
		}
	}


};
</script>

<style>
#app{
	background-color: black;
}
</style>
