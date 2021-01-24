<template>
	<v-container
		id="container"

	>
		<v-form>

			<v-app id="inspire">
				<v-row
					no-gutters="no-gutters">
					<v-col>
						<v-text-field
							label="Ad"
							:rules="rules"
							hide-details="auto"
							:counter="100"
							prepend-icon="mdi-account"
							v-model="personName"
						></v-text-field>
					</v-col>
					<v-col>
						<v-menu
							ref="menu"
							v-model="menu"
							:close-on-content-click="false"
							transition="scale-transition"
							max-width="290px"
							min-width="auto"

						>
							<template v-slot:activator="{ on, attrs }">
								<v-text-field
									v-model="date"
									label="Birthday date"
									prepend-icon="mdi-calendar"
									readonly
									v-bind="attrs"
									v-on="on"

								></v-text-field>
							</template>
							<v-date-picker
								ref="picker"
								v-model="date"
								:max="new Date().toISOString().substr(0, 10)"
								min="1950-01-01"
								@change="save"
							></v-date-picker>
						</v-menu>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<v-text-field
							label="Soyad"
							:rules="rules"
							hide-details="auto"
							:counter="100"
							prepend-icon="mdi-account"
							v-model="personSurname"
						></v-text-field>
					</v-col>
					<v-col>
						<v-text-field
							label="E-mail"
							:rules="eMailRules"
							hide-details="auto"
							:counter="100"
							prepend-icon="mdi-email"
							v-model="eMail"
						></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<v-text-field
							label="telefon"
							:rules="telephoneRules"
							hide-details="auto"
							:counter="15"
							prepend-icon="mdi-phone"
							v-model="phoneNumber"
						></v-text-field>
					</v-col>
					<v-col>
						<v-file-input
							show-size
							counter
							multiple
							label="File input"
						></v-file-input>
					</v-col>
				</v-row>
				<v-row>
					<v-btn
						color="success"
						@click="addPersons"

					>Kaydet
					</v-btn>
				</v-row>
			</v-app>
		</v-form>
	</v-container>
</template>

<script>
import {mdiPhone} from '@mdi/js';

export default {
	name: "kisiEkle",
	data() {
		return {
			rules: [
				value => !!value || 'Required',
				value => (value && value.length >= 3) || 'Min 3 karakter'
			],
			telephoneRules: [
				value => !!value || 'Required',
				value => (value && value.length >= 11) || 'Telefon 11 karakterden az olamaz'
			],
			eMailRules: [
				value => !!value || 'E-mail is required',
				value => /.+@+/.test(value) || 'E-mail zorunlu'
			],
			date: null,
			menu: false,
			mdiPhone: mdiPhone,
			personNames: [],
			phoneNumbers: [],
			personSurnames: [],
			eMails: [],
			birthDates: [],
			personName: '',
			personSurname: '',
			phoneNumber: '',
			eMail: '',


		}

	},
	methods: {
		save(date) {
			this.$refs.menu.save(date)
		},
		addPersons() {
			this.personNames.push(this.personName);
			this.personSurnames.push(this.personSurname);
			this.phoneNumbers.push(this.phoneNumber);
			this.eMails.push(this.eMail);
			this.birthDates.push(this.date);
			this.personName = ''
			this.personSurname = ''
			this.phoneNumber = ''
			this.eMail = ''
			this.date = ''
		}

	},
	mounted() {
		if (localStorage.getItem('personNames')) {
			this.personNames = JSON.stringify(localStorage.getItem('personNames'))
		}
		if (localStorage.getItem('personSurnames')) {
			this.personSurname = JSON.stringify(localStorage.getItem('personSurnames'))

		}
		if (localStorage.getItem('phoneNumbers')) {
			this.phoneNumbers = JSON.stringify(localStorage.getItem('phoneNumbers'))

		}
		if (localStorage.getItem('eMails')) {
			this.eMails = JSON.stringify(localStorage.getItem('eMails'))
		}
		if (localStorage.getItem('birthDates')) {
			this.birthDates = JSON.stringify(localStorage.getItem('birthDates'))
		}
	},

	watch: {
		menu(val) {
			val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
		},
		personNames: {
			handler() {
				localStorage.setItem('personNames', JSON.stringify(this.personNames))
			},
			deep: true
		},
		personSurnames: {
			handler() {
				localStorage.setItem('personSurnames', JSON.stringify(this.personSurnames))
			},
			deep: true

		},
		phoneNumbers: {
			handler() {
				localStorage.setItem('phoneNumbers', JSON.stringify(this.phoneNumbers))
			}
		},
		eMails: {
			handler() {
				localStorage.setItem('eMails', JSON.stringify(this.eMails))
			}
		},
		birthDates: {
			handler() {
				localStorage.setItem('birthDates', JSON.stringify(this.birthDates))
			}
		}


	},


}
</script>

<style scoped>
#container {
	margin-left: 200px;
	padding: 50px;
}

</style>
