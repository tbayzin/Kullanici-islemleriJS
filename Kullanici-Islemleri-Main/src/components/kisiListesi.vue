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
									<v-card
										v-for="person in people"
										:key="person.uuid">
										<v-card-text>
											<v-container
											>
												<v-row
												>
													<v-col cols="6">
														<v-text-field
															required
															v-model="person.name"
														>{{ person.name }}
														</v-text-field>
													</v-col>
													<v-col cols="6">
														<v-text-field
															required
															v-model="person.surname"
														>{{ person.surname }}
														</v-text-field>
													</v-col>
													<v-col cols="6">
														<v-text-field
															label="Email*"
															v-model="person.eMail"
														>{{ person.eMail }}
														</v-text-field>
													</v-col>
													<v-col cols="6">
														<v-text-field
															label="Telefon"
															v-model="person.phoneNumber"
														>{{ person.phoneNumber }}
														</v-text-field>
													</v-col>
													<v-col cols="12"
													>
														<v-text-field

															label="Email*"
															required
															@change="person.name"
														></v-text-field>
													</v-col>

												</v-row>
											</v-container>
										</v-card-text>
										<v-card-actions>
											<v-spacer></v-spacer>
											<v-btn
												color="blue darken-1"
												text
												@click="disableEditing"
											>
												Close
											</v-btn>
											<v-btn
												color="blue darken-1"
												text
												@click="saveEdit(person.uuid)"
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

export default {
	name: "kisiListesi",

	data() {
		return {
			people: [],
			mdiDelete: mdiDelete,
			deletionCompleted: false,
			mdiPencil: mdiPencil,
			dialog: false,
			organizedName: '',
			organizedSurname: '',
			organizedEmail: '',
			organizedPhoneNumber: '',
			editing: false,
			editingPerson: ''

		}
	},
	created: function () {
		if (localStorage.getItem('people')) {
			this.people = JSON.parse(localStorage.getItem('people'))

		}


	},
	methods: {
		deletePerson(deletedPersonUUID) {
			let peopleArray = JSON.parse(localStorage.getItem('people'));
			// console.log(peopleArray)
			for (let i = 0; i < peopleArray.length; i++) {
				if (deletedPersonUUID === peopleArray[i].uuid) {
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

		// editPerson() {
		//
		// 	// for (let i = 0; i < this.people.length; i++) {
		// 	// 	if (editPersonUUID === this.people[i].uuid) {
		// 	// 		this.organizedName = this.people[i].name
		// 	// 		this.organizedSurname=this.people[i].surname
		// 	// 		this.organizedEmail=this.people[i].eMail
		// 	// 		this.organizedPhoneNumber=this.people[i].phoneNumber
		// 	//
		// 	// 	}
		// 	// }
		//
		//
		// },
		//		// disableEditing(personUUID){
		// 	for (let i =0;i<this.people.length;i++){
		// 		if(personUUID===this.people[i].uuid){
		// 			this.people[i].name=null
		// 			this.people[i].surname=null
		// 			this.people[i].phoneNumber=null
		// 			this.people[i].eMail=null
		// 		}
		// 	}
		//
		// 	this.editing=false
		// 	this.dialog=false
		// }
		saveEdit(savePerson) {

			for (let i = 0; i < this.people.length; i++) {
			// let i =3;
				if (savePerson === this.people[i].uuid) {
					// this.people[i].name=this.organizedName
					this.organizedName = this.people[i].name
					// this.people.push(this.people[i].name)
					this.organizedSurname=this.people[i].surname
					this.organizedEmail=this.people[i].eMail
					this.organizedPhoneNumber=this.people[i].phoneNumber
					this.dialog = false
					// this.disableEditing()

				}

			}
		},
		disableEditing(personUUID){
			for (let i =0;i<this.people.length;i++){
				if(personUUID===this.people[i].uuid){
					this.people[i].name=null
					this.people[i].surname=null
					this.people[i].phoneNumber=null
					this.people[i].eMail=null
				}
			}

			this.editing=false
			this.dialog=false
		}


	}


}

</script>

<style scoped>

</style>
