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
							<th>
								Ad
							</th>
							<th>
								Soyad
							</th>
							<th>
								Telefon
							</th>
							<th>
								Doğum Tarihi
							</th>
							<th>
								E-Mail
							</th>
							<th></th>
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
							<td>
								<v-icon @click="deletePerson(person.uuid)" v-text="mdiDelete"></v-icon>
							</td>


						</tr>
						<v-row>
							<v-col lg="4">
						<v-alert
							v-if="deletionCompleted"
							type="success"
							outlined
							dense
						>
							işlem başarılı
						</v-alert>
							</v-col>

						</v-row>
						</tbody>
					</template>
				</v-simple-table>
			</v-app>
		</div>
	</v-container>
</template>

<script>

import {mdiDelete} from '@mdi/js';
// import Vue from 'vue'

export default {
	name: "kisiListesi",

	data() {
		return {
			people: [],
			mdiDelete: mdiDelete,
			deletionCompleted: false
		}
	},
	created: function () {
		if (localStorage.getItem('people')) {
			this.people = JSON.parse(localStorage.getItem('people'))

		}
		let methods = this.methods
		console.log(methods)


	},
	methods: {
		deletePerson(deletedPerson) {
			let peopleArray = JSON.parse(localStorage.getItem('people'));
			// console.log(peopleArray)
			for (let i = 0; i < peopleArray.length; i++) {
				if (deletedPerson === peopleArray[i].uuid) {
					peopleArray.splice(i, 1)
					this.people.splice(i, 1)
					console.log("people", this.people[i])
					localStorage.removeItem('people')
					localStorage.setItem('people', JSON.stringify(peopleArray))
					this.deletionCompleted = true


				}
			}

			//console.log(peopleArray)


		}

	}


}

</script>

<style scoped>

</style>
