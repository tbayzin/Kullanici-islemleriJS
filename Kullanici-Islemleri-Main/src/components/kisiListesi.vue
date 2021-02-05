<template id="kisiListesi">

	<v-container
		fluid
	>
		<div id="app">
			<v-app id="inspire">
				<v-simple-table>
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
							v-for="person in people"
							:key="person.uuid"
						>
							<td>{{ person.name }}</td>
							<td>{{ person.surname }}</td>
							<td>{{ person.phoneNumber }}</td>
							<td>{{ person.birthDate }}</td>
							<td>{{ person.eMail }}</td>
							<td><v-icon @click="deletePerson(person.uuid)" v-text="mdiDelete"></v-icon></td>


						</tr>
						</tbody>
					</template>
				</v-simple-table>
			</v-app>
		</div>
	</v-container>
</template>

<script>

import {mdiDelete} from '@mdi/js';

export default {
	name: "kisiListesi",

	data() {
		return {
			people: [],
			mdiDelete: mdiDelete
		}
	},
	created() {
		if (localStorage.getItem('people')) {
			this.people = JSON.parse(localStorage.getItem('people'))

		}

	},
	methods:{
		deletePerson(uuidPerson){
			uuidPerson= localStorage.removeItem('people')
			console.log(uuidPerson)


		}

	}


}

</script>

<style scoped>

</style>
