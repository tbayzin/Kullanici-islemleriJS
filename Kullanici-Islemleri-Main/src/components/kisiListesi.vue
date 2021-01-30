<template id="kisiListesi">

	<v-container
		fluid
	>
		<div id="app">
			<v-app id="inspire">
				<v-simple-table height="300px">
					<template v-slot:default>
						<thead>
						<tr>
							<th class="text-left">
								Ad
							</th>
							<th class="text-left">
								Soyad
							</th>
							<th class="text-left">
								Telefon
							</th>
							<th class="text-left">
								Doğum Tarihi
							</th>
							<th class="text-left">
								E-Mail
							</th>

						</tr>
						</thead>
						<tbody>
						<tr
							v-for="(item,i) in personNames"
							:key="item"
						>
							<td>{{personNames[i]}}</td>
							<td>{{personSurnames[i]}}</td>
							<td>{{phoneNumbers[i]}}</td>
							<td>{{birthDates[i]}}</td>
							<td>{{eMails[i]}}</td>
						</tr>
						</tbody>
					</template>
				</v-simple-table>
			</v-app>
		</div>
	</v-container>
</template>

<script>


export default {
	name: "kisiListesi",

	data() {
		return {

			personNames: [],
			personSurnames: [],
			eMails: [],
			phoneNumbers: [],
			birthDates: [],


		}
	},
	created() {
		if (localStorage.getItem('personNames')) {
			this.personNames = JSON.parse(localStorage.getItem('personNames'))

		}
		if (localStorage.getItem('personSurnames')) {
			this.personSurnames = JSON.parse(localStorage.getItem('personSurnames'))

		}
		if (localStorage.getItem('phoneNumbers')) {
			this.phoneNumbers = JSON.parse(localStorage.getItem('phoneNumbers'))

		}
		if (localStorage.getItem(	'eMails')) {
			this.eMails = JSON.parse(localStorage.getItem('eMails'))
		}
		if (localStorage.getItem('birthDates')) {
			this.birthDates = JSON.parse(localStorage.getItem('birthDates'))
		}
	}


}

// console.log(localStorage.getItem('personNames'))
</script>

<style scoped>

</style>
