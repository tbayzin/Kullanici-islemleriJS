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
							v-for="(item,i) in persons"
							:key="item"
						>
							<td>{{ persons[i].name }}</td>
							<td>{{ persons[i].surname }}</td>
							<td>{{ persons[i].phoneNumber }}</td>
							<td>{{ persons[i].birthDate }}</td>
							<td>{{ persons[i].eMail }}</td>


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

			persons: []


		}
	},
	created() {
		if (localStorage.getItem('persons')) {
			this.persons = JSON.parse(localStorage.getItem('persons'))
			console.log(this.persons)

		}
	}


}

// console.log(localStorage.getItem('personNames'))
</script>

<style scoped>

</style>
