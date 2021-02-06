<template>
	<v-container
		id="container"
		fluid

	>
		<v-form>

			<v-app id="inspire">
				<v-row>
					<v-col lg="4" class="ma-0">
						<v-text-field
							label="Ad*"
							:rules="rules"
							hide-details="auto"
							:counter="100"
							prepend-inner-icon="mdi-account"
							v-model="personName"
							outlined
							shaped
							clearable
						></v-text-field>
					</v-col>
					<v-col lg="4" class="ma-0">
						<v-text-field
							label="Soyad*"
							:rules="rules"
							hide-details="auto"
							:counter="100"
							prepend-inner-icon="mdi-account"
							v-model="personSurname"
							outlined
							shaped
							clearable
						></v-text-field>
					</v-col>
					<v-col lg="4" class="ma-0">
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
									v-model="birthDate"
									label="Doğum Tarihi"
									prepend-inner-icon="mdi-calendar"
									readonly
									v-bind="attrs"
									v-on="on"
									outlined
									clearable
									shaped

								></v-text-field>
							</template>
							<v-date-picker
								ref="picker"
								v-model="birthDate"
								:max="new Date().toISOString().substr(0, 10)"
								min="1950-01-01"
								@change="save"
							></v-date-picker>
						</v-menu>
					</v-col>


				</v-row>
				<v-row>
					<v-col class="ma-0"
					>
						<v-text-field
							label="telefon"
							:rules="telephoneRules"
							hide-details="auto"
							:counter="15"
							prepend-inner-icon="mdi-phone"
							v-model="phoneNumber"
							outlined
							shaped
							clearable
						></v-text-field>
					</v-col>
					<v-col class="ma-0">
						<v-file-input
							prepend-icon=""
							counter
							label="File input"
							multiple
							prepend-inner-icon="mdi-paperclip"
							outlined
							shaped
							:show-size="1000"
						></v-file-input>
					</v-col>
					<v-col class="ma-0">
						<v-text-field
							label="E-mail"
							:rules="eMailRules"
							hide-details="auto"
							:counter="100"
							prepend-inner-icon="mdi-email"
							v-model="eMail"
							outlined
							shaped
							clearable
						></v-text-field>
					</v-col>

				</v-row>
				<v-row>
					<v-col lg="2">
						<v-btn
							color="warning"
							@click="addPerson"

						>
							Kaydet
						</v-btn>
					</v-col>
					<v-col></v-col>
					<v-col lg="2">
						<v-alert
							type="success"
							outlined
							dense
							v-if="cmp && complete"
						>
							KAYDEDİLDİ
						</v-alert>
						<v-alert
							type="error"
							outlined
							dense
							v-if="cmp && !complete"
						>
							LÜTFEN GEREKLİ ALANLARI DOLDURUNUZ
						</v-alert>
					</v-col>
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
				value => !!value || 'Zorunlu alan',
				value => (value && value.length >= 3) || 'Min 3 karakter'
			],
			telephoneRules: [
				value => (value && value.length >= 11) || 'Telefon 11 karakterden az olamaz'
			],
			eMailRules: [
				value => /.+@+/.test(value)
			],
			menu: false,
			mdiPhone: mdiPhone,
			person: {},
			people: [],
			personName: '',
			personSurname: '',
			phoneNumber: '',
			eMail: '',
			personCounter:0,
			birthDate: null,
			complete: false,
			cmp: false

		}
	},

	methods: {
		save(date) {
			this.$refs.menu.save(date)
		},
		addPerson() {
			if (this.personName === '') {
				console.log("skldfjgkl")
			} else if (this.personSurname === '') {
				console.log("skldfjgkl")
			} else {
				this.personCounter++
				this.person = {
					uuid: this.uuidv4(),
					name: this.personName,
					surname: this.personSurname,
					phoneNumber: this.phoneNumber,
					birthDate: this.birthDate,
					eMail: this.eMail,
					totalPerson: this.personCounter
				};
				this.eMail = ''
				this.phoneNumber = ''
				this.personSurname = ''
				this.personName = ''
				this.birthDate = ''
			}
			console.log(this.person)
			this.people.push(this.person)


		},
		uuidv4() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
				return v.toString(16);
			});
		}
	},
	created() {
		if (localStorage.getItem('people') !== null) {
			this.people = JSON.parse(localStorage.getItem('people'))
			console.log(this.people)
		}

	},

	watch: {
		menu(val) {
			val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))

		},
		person: {
			handler() {
				localStorage.setItem('people', JSON.stringify(this.people))
			},
			deep: true
		},

	},
}
</script>


<style scoped>
#container {
	margin-left: 200px;
	padding: 50px;
}
</style>
