<template>
	<v-container
		:fluid="true"
		id="cont"
	>
		<v-row>
			<v-app-bar
				color="primary"
				flat
			>
				<v-app-bar-nav-icon @click="showOrHideMenu"></v-app-bar-nav-icon>
			</v-app-bar>
		</v-row>
		<v-row>
			<v-col>
				<v-card
					flat
				>
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
								<v-list-item link>
									<v-list-item-icon>
										<v-icon>
											{{ item.icon }}
										</v-icon>
									</v-list-item-icon>
									<v-list-item-title>
										{{ item.title }}
									</v-list-item-title>
								</v-list-item>
							</v-list-item>
						</v-list>
					</v-navigation-drawer>
				</v-card>

			</v-col>
			<v-col>
				<v-row>
					<v-row lg="4">
						<v-card
							class="mx-auto"
							max-width="400"
							v-for="cardItems in cards"
							:key="cardItems"
						>
							<v-img
								class="white--text aligin-end"
								height="200px"
								src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
							>
							</v-img>
							<v-card-subtitle>
								{{ cardItems.subtitle }}
							</v-card-subtitle>
							<v-card-text class="text--primary">
								<div>
									{{ cardItems.title }}
								</div>
							</v-card-text>
						</v-card>
					</v-row>
				</v-row>

			</v-col>
		</v-row>


	</v-container>


</template>

<script>
export default {
	name: 'Dashboard',

	data() {

		return {
			items: [
				{
					title: 'Anasayfa',
					icon: 'mdi-view-dashboard'
				},
				{
					title: 'Kişi Ekle',
					icon: 'mdi-account-plus'
				},
				{
					title: 'kişi Listele',
					icon: 'mdi-account-group'
				},
				{
					title: 'Kişi Yüz Arama',
					icon: 'mdi-attachment'
				},
			],
			cards: [
				{
					title: 'Anasayfa',
					subtitle: 'dneemeee'
				},
				{
					title: 'Kişi Ekle',
					subtitle: 'denemeeeeee'
				},
				{
					title: 'kişileri Listele',
					subtitle: 'denemeeeeeeee'
				},
			],
			displayNavBar: "display:none"
		}
	},
	methods: {
		showOrHideMenu() {
			if (this.displayNavBar === "display:none") {
				this.displayNavBar = "display:block"
			} else {
				this.displayNavBar = "display:none"
			}
		}
	}
}
</script>

<style>
#cont {
	height: fit-content;

}


</style>
