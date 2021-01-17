<template>
	<v-container
		:fluid="true"
		id="cont"
	>

<h3>	Eklenen kişi aktiviteleri aşağıdaki spark lineda gösterilmiştir. </h3>

<p> 0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0  </p> <br>

// Spark line
	<trend 	:data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]" :gradient="['#6fa8dc', '#42b983', '#2c3e50']" auto-draw smooth	></trend>  <br> <br> <br>




		<v-row>
			<v-col>
				<v-row>
					<v-row lg="4">
						<v-card
							class="mx-auto"
							max-width="400"
							id="card"
							v-for="cardItem in cardItems"
							:key="cardItem"
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
	data() {
		return {
			cardItems: [
				{
					title: 'Anasayfa',
					subtitle: 'dneemeee',
					image: 'https://cankayacicekcilik.com.tr/images/urun/b_11667829_-beyaz-papatya-kutusu-cicek-siparisi-min.jpg'
				},
				{
					title: 'Kişi Ekle',
					subtitle: 'denemeeeeee',
					image: 'https://cdn03.ciceksepeti.com/cicek/at4273-1/XL/11-li-kirmizi-gul-cicek-buketi-at4273-1-bf4868a0836d4c5898c8f8a1366ed969.jpg'
				},
				{
					title: 'kişi Listele',
					subtitle: 'denemeeeeeeee',
					image: 'https://www.cicekse.com/izmir-cicek/mor-cicek_lg.jpg'
				},
			]
		}
	},
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
