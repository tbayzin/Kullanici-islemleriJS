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
							></v-text-field>
						</v-col>
						<v-col>
							<v-text-field
								label="E-mail"
								:rules="eMailRules"
								hide-details="auto"
								:counter="100"
								prepend-icon="mdi-email"
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
					@click="kaydet()"
				>Kaydet</v-btn>
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
			sena:''

		}

	},
	watch: {
		menu(val) {
			val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
		},
		kaydet(){
			localStorage.setItem('')


		}
	},
	methods: {
		save(date) {
			this.$refs.menu.save(date)
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
