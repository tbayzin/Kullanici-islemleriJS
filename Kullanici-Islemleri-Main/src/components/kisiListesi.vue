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
							<th>Düzenle</th>
							<th>Sil</th>
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
								<v-dialog
									v-model="dialog"
									persistent
									max-width="600px"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-icon
											v-text="mdiPencil"
											v-bind="attrs"
											v-on="on"
										>
										</v-icon>
									</template>
									<v-card>
										<v-card-text>
											<v-container>
												<v-row>
													<v-col
														cols="12"
													>
														<v-text-field
															required
															v-text="person.name"
														></v-text-field>
													</v-col>
													<v-col
														cols="12"

													>
														<v-text-field
															required
															v-text="person.surname"
														></v-text-field>
													</v-col>

													<v-col cols="12">
														<v-text-field
															label="Email*"
															required
															v-text="person.eMail"
														></v-text-field>
													</v-col>
													<v-col cols="12">
														<v-text-field
															label="Telefon"
															v-text="person.phoneNumber"
															required
														></v-text-field>
													</v-col>
													<v-col
														cols="12"

													>
														<v-text-field
															label="Email*"
															required
															@change="person.name"
														></v-text-field>
													</v-col>

												</v-row>
											</v-container>
											<small>*indicates required field</small>
										</v-card-text>
										<v-card-actions>
											<v-spacer></v-spacer>
											<v-btn
												color="blue darken-1"
												text
												@click="dialog = false"
											>
												Close
											</v-btn>
											<v-btn
												color="blue darken-1"
												text
												@click="dialog = false"
											>
												Save
											</v-btn>
										</v-card-actions>
									</v-card>
								</v-dialog>
							</td>
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

import {mdiDelete, mdiPencil} from '@mdi/js';
// import Vue from 'vue'

export default {
	name: "kisiListesi",

	data() {
		return {
			people: [],
			mdiDelete: mdiDelete,
			deletionCompleted: false,
			mdiPencil: mdiPencil,
			dialog: false
		}
	},
	created: function () {
		if (localStorage.getItem('people')) {
			this.people = JSON.parse(localStorage.getItem('people'))

		}


	},
	methods: {
		deletePerson(deletedPerson) {
			let peopleArray = JSON.parse(localStorage.getItem('people'));
			// console.log(peopleArray)
			for (let i = 0; i < peopleArray.length; i++) {
				if (deletedPerson === peopleArray[i].uuid) {
					peopleArray.splice(i, 1)
					this.people.splice(i, 1)
					// console.log("people", this.people[i])
					localStorage.removeItem('people')
					localStorage.setItem('people', JSON.stringify(peopleArray))
					this.deletionCompleted = true


				}
			}

			//console.log(peopleArray)


		},

		editPerson(organizedPerson) {
			console.log("organized person", organizedPerson)

		}

	}


}

</script>

<style scoped>

</style>
