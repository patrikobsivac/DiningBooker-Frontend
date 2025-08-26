<template>
  <v-container class="fill-height user-container" fluid>
    <v-row align="start" justify="center">
      <v-col cols="12" sm="10" md="6">
        <v-card class="pa-6 rounded-xl user-card" elevation="6">
          <v-card-title class="text-h6 font-weight-bold user-title">
            Informacije o korisniku
          </v-card-title>
          <v-divider class="my-2"></v-divider>
          <v-card-text class="text-body-1 user-info">
            <div><strong>Ime:</strong> {{ currentUser.firstName }}</div>
            <div><strong>Prezime:</strong> {{ currentUser.lastName }}</div>
            <div><strong>Email:</strong> {{ currentUser.email }}</div>
            <div><strong>Broj Telefona:</strong> {{ currentUser.phoneNumber }}</div>
          </v-card-text>
        </v-card>
        <v-row class="mt-6" dense>
          <v-col cols="12" md="6">
            <v-card class="pa-4 rounded-xl past-res-card" elevation="4">
              <v-card-title class="text-subtitle-1 font-weight-medium">
                Prošle rezervacije
              </v-card-title>
              <v-card-text v-if="pastReservations.length">
                <v-row dense>
                  <v-col v-for="res in pastReservations" :key="res._id" cols="12" sm="12">
                    <v-card class="pa-3 reservation-card" outlined>
                      <div><strong>Ime:</strong> {{ res.ime }}</div>
                      <div><strong>Prezime:</strong> {{ res.prezime }}</div>
                      <div><strong>Email:</strong> {{ res.email }}</div>
                      <div><strong>Telefon:</strong> {{ res.telefon }}</div>
                      <div><strong>Datum rezervacije:</strong> {{ res.datum }}</div>
                      <div><strong>Broj gostiju:</strong> {{ res.brojGostiju }}</div>
                      <div v-if="res.napomena"><strong>Napomena:</strong> {{ res.napomena }}</div>
                      <div>
                        <strong>Ocjena:</strong>
                        <v-rating
                          v-model="res.rating"
                          dense
                          half-increments
                          @change="updateBookingRating(res._id, res.rating)"
                        ></v-rating>
                      </div>
                      <div class="text-gray">Prošla rezervacija se ne može obrisati</div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-text v-else>Nema prošlih rezervacija</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-4 rounded-xl past-res-card" elevation="4">
              <v-card-title class="text-subtitle-1 font-weight-medium">
                Buduće rezervacije
              </v-card-title>
              <v-card-text v-if="futureReservations.length">
                <v-row dense>
                  <v-col v-for="res in futureReservations" :key="res._id" cols="12" sm="12">
                    <v-card class="pa-3 reservation-card" outlined>
                      <div><strong>Ime:</strong> {{ res.ime }}</div>
                      <div><strong>Prezime:</strong> {{ res.prezime }}</div>
                      <div><strong>Email:</strong> {{ res.email }}</div>
                      <div><strong>Telefon:</strong> {{ res.telefon }}</div>
                      <div><strong>Datum rezervacije:</strong> {{ res.datum }}</div>
                      <div><strong>Broj gostiju:</strong> {{ res.brojGostiju }}</div>
                      <div v-if="res.napomena"><strong>Napomena:</strong> {{ res.napomena }}</div>
                      <div class="text-gray">Rezervacija još nije prošla, ocjena nije dostupna</div>
                      <v-btn small color="red" @click="confirmDeleteBooking(res)">Obriši</v-btn>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-text v-else>Nema budućih rezervacija</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-card-actions class="justify-center mt-2">
          <v-btn color="#b44545" variant="flat" class="px-6 white--text" @click="novaRezervacija">
            Bookiraj novu rezervaciju
          </v-btn>
        </v-card-actions>
        <v-dialog v-model="confirmDeleteDialog" max-width="400">
          <v-card>
            <v-card-title class="text-h6">Potvrda brisanja</v-card-title>
            <v-card-text>
              Jeste li sigurni da želite obrisati ovu buduću rezervaciju?
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey" @click="confirmDeleteDialog = false">Odustani</v-btn>
              <v-btn text color="red" @click="deleteBooking">Obriši</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="3000" bottom center>
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
  beforeRouteEnter(to, from, next) {
    next(vm => vm.loadUserData());
  },
  beforeRouteUpdate(to, from, next) {
    this.loadUserData();
    next();
  },
  methods: {
    async loadUserData() {
      try {
        const userData = localStorage.getItem("currentUser");
        if (!userData) return this.$router.push("/login");
        this.currentUser = JSON.parse(userData);
        const response = await axios.get(`http://localhost:3000/api/bookings/guest/${this.currentUser._id}`);
        const today = new Date();
        this.pastReservations = response.data.filter(res => new Date(res.datum) < today);
        this.futureReservations = response.data.filter(res => new Date(res.datum) >= today);
      } catch (err) {
        console.error(err);
        this.snackbarMessage = "Greška pri učitavanju podataka!";
        this.snackbarColor = "error";
        this.snackbar = true;
      }
    },
    novaRezervacija() {
      this.$router.push("/booking");
    },
    confirmDeleteBooking(booking) {
      const today = new Date();
      if (new Date(booking.datum) < today) {
        this.snackbarMessage = "Prošle rezervacije se ne mogu brisati!";
        this.snackbarColor = "error";
        this.snackbar = true;
        return;
      }
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
        await this.loadUserData();
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
  margin-bottom: 16px;
}

.reservation-card {
  margin-bottom: 12px;
}

.v-btn {
  border-radius: 8px;
  font-weight: 600;
  text-transform: none;
}

.text-gray {
  color: gray;
  font-size: 0.85rem;
  margin-top: 4px;
}
</style>
