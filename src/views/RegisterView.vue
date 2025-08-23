<template>
	<v-container fill-height fluid>
		<v-row align="center" justify="center">
			<v-col align="center" justify="center" cols="12">
				<v-card class="custom-card" width="400px" outlined>
					<v-card-title align="left" class="primary--text">Registracija</v-card-title>
					<v-card-subtitle align="left">
						Unesite podatke za registraciju
					</v-card-subtitle>
					<v-card-text class="custom-card-text">
						<v-form v-model="valid">
							<v-text-field
								v-model="email"
								dense
								label="E-mail"
								clearable
								type="email"
								:rules="[rules.required, rules.email]"
								outlined></v-text-field>
							<v-text-field
								v-model="password"
								dense
								label="Zaporka"
								clearable
								:append-icon="showIcon ? 'mdi-eye' : 'mdi-eye-off'"
								:rules="[rules.required, rules.min]"
								:type="showIcon ? 'text' : 'password'"
								@click:append="togglePasswordVisibility"
								outlined></v-text-field>
						</v-form>
					</v-card-text>
					<v-card-actions class="custom-card-actions">
						<v-btn
							color="red darken-3"
							outlined
							@click="clearFormData">
							Očisti
						</v-btn>
						<v-btn
							:disabled="isButtonDisabled"
							outlined
							color="primary"
							@click="registerUser">
							Potvrdi
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import axios from "axios";
export default {
	name: "RegisterView",
	data() {
		return {
			isButtonDisabled: false,
			valid: true,
			email: null,
			password: null,
			showIcon: false,
			rules: {
				required: (value) => !!value || "Ovo polje je obavezno",
				min: (v) => v?.length >= 6 || "Zaporka mora imati najmanje 6 znakova!",
				email: (v) =>
					!v ||
					/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
					"E-mail mora biti valjan",
			},
		};
	},
	watch: {
		valid(newVal) {
			this.isButtonDisabled = !newVal;
		},
	},
	methods: {
		clearFormData() {
			this.email = null;
			this.password = null;
		},
async registerUser() {
  if (!this.valid) return;
  try {
    const response = await axios.post("#", {
      email: this.email,
      password: this.password
    });

    if (response.data.success) {
      this.$toast.success("Registracija uspješna! Prijavite se.");
      this.$router.push("/login");
    } else {
      this.$toast.error(response.data.message || "Došlo je do greške");
    }
  } catch (error) {
    console.error(error);
    this.$toast.error("Greška pri registraciji!");
  }
},
		togglePasswordVisibility() {
			this.showIcon = !this.showIcon;
		},
	},
};
</script>

<style scoped>
.custom-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  backdrop-filter: blur(6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.primary--text {
	color: #1e88e5 !important;
}

.custom-card-text {
	padding-top: 20px;
}

.custom-card-actions {
	justify-content: flex-end;
}

.text-left {
	margin-left: 0;
}

.text-right {
	margin-right: 0;
}
</style>
