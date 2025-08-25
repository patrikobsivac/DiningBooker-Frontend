<template>
  <v-container class="fill-height user-container" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10" md="6">
        <v-card class="pa-6 rounded-xl user-card" elevation="6">
          <v-card-title class="text-h6 font-weight-bold user-title">
            Informacije o korisniku
          </v-card-title>
          <v-divider class="my-2"></v-divider>
          <v-card-text class="text-body-1 user-info">
            <div><strong>Ime i Prezime:</strong> {{ currentUser.firstName }} {{ currentUser.lastName }}</div>
            <div><strong>Email:</strong> {{ currentUser.email }}</div>
            <div><strong>Broj Telefona:</strong> {{ currentUser.phoneNumber }}</div>
          </v-card-text>
        </v-card>
        <v-card class="pa-4 mt-6 rounded-xl past-res-card" elevation="4">
          <v-card-title class="text-subtitle-1 font-weight-medium">
            Prošle rezervacije
          </v-card-title>
          <v-card-text v-if="pastReservations.length">
            <div v-for="res in pastReservations" :key="res._id" class="reservation-card">
              <div><strong>Rezervacija:</strong> {{ res.naziv }}</div>
              <div><strong>Datum:</strong> {{ res.datum }}</div>
              <div>
                <strong>Ocjena:</strong>
                <v-rating
                  v-model="res.rating"
                  dense
                  half-increments
                  @change="updateBookingRating(res._id, res.rating)"
                ></v-rating>
              </div>
              <v-btn small color="red" @click="confirmDeleteBooking(res)">Obriši</v-btn>
            </div>
          </v-card-text>
          <v-card-text v-else>
            Nema prošlih rezervacija
          </v-card-text>
          <v-divider class="my-2"></v-divider>
          <div><strong>Prosjek ocjena:</strong> {{ averageRating }}</div>
          <v-card-actions class="justify-center mt-2">
          <v-btn color="#b44545" variant="flat" class="px-6 white--text" @click="novaRezervacija">
            Nova rezervacija
          </v-btn>
          </v-card-actions>
        </v-card>
        <v-dialog v-model="confirmDeleteDialog" max-width="400">
          <v-card>
            <v-card-title class="text-h6">Potvrda brisanja</v-card-title>
            <v-card-text>
              Jeste li sigurni da želite obrisati ovu rezervaciju?
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey" @click="confirmDeleteDialog = false">Odustani</v-btn>
              <v-btn text color="red" @click="deleteBooking">Obriši</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="3000" top right>
          {{ snackbarMessage }}
        </v-snackbar>
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
      pastReservations: [],
      futureReservations: [],
      snackbar: false,
      snackbarMessage: "",
      snackbarColor: "success",
      confirmDeleteDialog: false,
      bookingToDelete: null,
    };
  },
  computed: {
    averageRating() {
      if (!this.pastReservations.length) return 0;
      const total = this.pastReservations.reduce((sum, r) => sum + (r.rating || 0), 0);
      return (total / this.pastReservations.length).toFixed(1);
    },
  },
  created() {
    this.loadUserData();
  },
  methods: {
    async loadUserData() {
      try {
        const userData = localStorage.getItem("currentUser");
        if (!userData) return this.$router.push("/login");

        this.currentUser = JSON.parse(userData);

        // Dohvat rezervacija korisnika iz backend-a
        const response = await axios.get(`http://localhost:3000/api/bookings/guest/${this.currentUser._id}`);
        const today = new Date();
        this.pastReservations = response.data.filter(res => new Date(res.datum) < today);
        this.futureReservations = response.data.filter(res => new Date(res.datum) >= today);

      } catch (err) {
        console.error("Greška pri dohvaćanju korisničkih podataka ili rezervacija:", err);
        this.snackbarMessage = "Greška pri učitavanju podataka!";
        this.snackbarColor = "error";
        this.snackbar = true;
      }
    },

    novaRezervacija() {
      this.$router.push("/booking");
    },

    async updateBookingRating(bookingId, rating) {
      try {
        await axios.post(`http://localhost:3000/api/ratings`, {
          gostId: this.currentUser._id,
          ocjena: rating,
          komentar: "",
        });
        this.snackbarMessage = "Ocjena uspješno spremljena!";
        this.snackbarColor = "success";
        this.snackbar = true;

      } catch (err) {
        console.error(err);
        this.snackbarMessage = "Greška pri spremanju ocjene!";
        this.snackbarColor = "error";
        this.snackbar = true;
      }
    },

    confirmDeleteBooking(booking) {
      this.bookingToDelete = booking;
      this.confirmDeleteDialog = true;
    },

    async deleteBooking() {
      try {
        await axios.delete(`http://localhost:3000/api/bookings/${this.bookingToDelete._id}`);
        this.snackbarMessage = "Rezervacija obrisana!";
        this.snackbarColor = "success";
        this.snackbar = true;

        this.confirmDeleteDialog = false;
        this.bookingToDelete = null;

        await this.loadUserData(); // osvježi listu rezervacija
      } catch (err) {
        console.error(err);
        this.snackbarMessage = "Greška pri brisanju rezervacije!";
        this.snackbarColor = "error";
        this.snackbar = true;
      }
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
