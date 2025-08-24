<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col align="center" justify="center" cols="12">
        <v-card class="custom-card" width="500px" outlined>
          <v-card-title align="left" class="primary--text">Prijava</v-card-title>
          <v-card-subtitle align="left">
            Unesite podatke za prijavu
          </v-card-subtitle>
          <v-card-text class="custom-card-text">
            <v-form v-model="isValid">
              <v-text-field
                v-model="userEmail"
                dense
                label="E-mail"
                clearable
                type="email"
                :rules="[fieldRules.required, fieldRules.email]"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="userPassword"
                dense
                label="Lozinka"
                clearable
                :append-icon="togglePassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[fieldRules.required, fieldRules.minLength]"
                :type="togglePassword ? 'text' : 'password'"
                @click:append="togglePasswordVisibility"
                outlined
              ></v-text-field>
            </v-form>
            <v-btn
              @click="showPasswordDialog"
              class="text-left"
              text
              small
              color="blue lighten-2"
            >
              Zaboravljena lozinka?
            </v-btn>
            <v-btn
              outlined
              small
              color="teal darken-1"
              to="/registracija"
            >
              Niste registrirani? Kliknite ovdje
            </v-btn>
          </v-card-text>
          <v-card-actions class="custom-card-actions">
            <v-btn
              @click="submitLogin"
              :disabled="disableLoginButton"
              outlined
              color="primary"
            >
              Potvrdi
            </v-btn>
          </v-card-actions>
        </v-card>

        <!-- Dialog za reset lozinke -->
        <v-dialog width="350px" persistent v-model="passwordResetDialog">
          <v-card>
            <v-card-title>Resetiraj Lozinku</v-card-title>
            <v-card-subtitle>
              Unesite svoj e-mail za resetiranje lozinke
            </v-card-subtitle>
            <v-card-text>
              <v-text-field
                v-model="emailForPasswordReset"
                dense
                label="E-mail"
                clearable
                type="text"
                :rules="[fieldRules.required, fieldRules.email]"
                outlined
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="red" outlined text small @click="closePasswordDialog">
                Zatvori
              </v-btn>
              <v-btn
                outlined
                small
                color="green darken-2"
                @click="sendResetLink(emailForPasswordReset)"
              >
                Pošalji
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      emailForPasswordReset: null,
      passwordResetDialog: false,
      disableLoginButton: false,
      isValid: true,
      userEmail: null,
      userPassword: null,
      togglePassword: false,
      fieldRules: {
        required: (value) => !!value || "Ovo polje je obavezno",
        minLength: (v) => v?.length >= 4 || "Lozinka mora imati najmanje 4 znakova",
        email: (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Neispravna e-mail adresa!",
      },
    };
  },
  methods: {
    async submitLogin() {
      if (!this.isValid) return;

      try {
        const response = await axios.post("http://localhost:3000/login", {
          email: this.userEmail,
          password: this.userPassword,
        });

        localStorage.setItem("authToken", response.data.token);
        this.$toast.success("Prijava uspješna!");
        this.$router.push("/");
      } catch (error) {
        console.error(error);
        this.$toast.error(error.response?.data?.error || "Greška pri prijavi!");
      }
    },
    async sendResetLink(email) {
      try {
        await axios.post("http://localhost:3000/changePass", { email });
        this.$toast.success("Link za reset lozinke poslan!");
      } catch (error) {
        console.error(error);
        this.$toast.error("Greška pri resetu lozinke!");
      }
      this.closePasswordDialog();
    },
    togglePasswordVisibility() {
      this.togglePassword = !this.togglePassword;
    },
    closePasswordDialog() {
      this.passwordResetDialog = false;
    },
    showPasswordDialog() {
      this.passwordResetDialog = true;
    },
  },
  watch: {
    isValid(newVal) {
      this.disableLoginButton = !newVal;
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
