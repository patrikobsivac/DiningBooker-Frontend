<template>
  <v-container class="fill-height user-container" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pa-6 rounded-xl user-card" elevation="6">
          <v-card-title class="text-h6 font-weight-bold user-title">
            Informacije o korisniku
          </v-card-title>
          <v-divider class="my-2"></v-divider>
          <v-card-text class="text-body-1 user-info">
            <div><strong>Ime i Prezime:</strong> {{ ime }} {{ prezime }}</div>
            <div><strong>Email:</strong> {{ email }}</div>
            <div><strong>Broj Telefona:</strong> {{ telefon }}</div>
          </v-card-text>
        </v-card>
        <v-card class="pa-4 mt-6 rounded-xl past-res-card" elevation="4">
          <v-card-title class="text-subtitle-1 font-weight-medium">
            Prošle rezervacije
          </v-card-title>
          <v-card-actions class="justify-center mt-2">
            <v-btn
              color="#b44545"
              variant="flat"
              class="px-6"
              @click="novaRezervacija"
            >
              Nova rezervacija
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
  name: "UserView",
  data() {
    return {
      currentUser: {},          
      pastBookings: [],     
      futureBookings: [],   
    };
  },
  created() {
    this.loadUserData();
  },
  methods: {
    async loadUserData() {
      try {
        const userData = localStorage.getItem("currentUser");
        if (userData) {
          this.currentUser = JSON.parse(userData);
          const response = await axios.get(`#`);

          const today = new Date();
          this.pastReservations = response.data.filter(
            (res) => new Date(res.datum) < today
          );
          this.futureReservations = response.data.filter(
            (res) => new Date(res.datum) >= today
          );
        } else {
          this.$router.push("/login");
        }
      } catch (error) {
        console.error("Greška pri dohvaćanju korisničkih podataka ili rezervacija:", error);
      }
    },
    novaRezervacija() {
      this.$router.push("/booking");
    },
  },
};
</script>

<style scoped>
.user-container {
  min-height: 100vh;
}

.user-card {
  background-color: #fdfdfd;
  text-align: center;
}

.user-title {
  color: #555;
  text-align: center;
  display: flex;
  justify-content: center;
}

.user-info {
  color: #444;
  line-height: 1.8;
}

.past-res-card {
  background-color: #f9f9f9;
  text-align: center;
}

.v-btn {
  border-radius: 8px;
  font-weight: 600;
  text-transform: none;
}
</style>
