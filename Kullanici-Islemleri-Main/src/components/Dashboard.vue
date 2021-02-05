<template>
	<v-container
		id="cont"
		fluid>
		<v-row>
			<v-col>
				<v-row>
					<v-row lg="4">
						<v-card
							class="mx-auto"
							max-width="400"
							id="card"
							v-for="(cardItem,i) in cardItems"
							:key="i"
						>
							<v-img
								class="white--text aligin-end"
								height="200px"
								:src=cardItem.image
							>
							</v-img>
							<v-card-subtitle>{{ cardItem.subtitle }}</v-card-subtitle>
							<v-card-text class="text--primary">
								<div>{{ cardItem.title }}</div>
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
	components: {

	},
	data() {
		return {
			cardItems: [
				{
					title: 'Anasayfa',
					subtitle: 'Ana sayfaya dönün',
					image: 'images/index.png'
				},
				{
					title: 'Kişi Ekle',
					subtitle: 'Kişi ekleme sayfası',
					image: 'images/personadd.png'
				},
				{
					title: 'Kişi Listele',
					subtitle: 'Kişileri görün',
					image: 'images/peoplelist.jpg'
				},
			],
		}
	},
	created() {
		if (localStorage.getItem('people')){
			let totalPersonList=JSON.parse(localStorage.getItem('people')).totalPerson
			console.log(totalPersonList)
		}
	}

}
</script>

<style>
#cont {
	height: fit-content;
}

#card {
	margin: 15px;
}


</style>
