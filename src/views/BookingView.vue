<template>
  <v-container class="fill-height booking-container" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="5">
        <v-card class="pa-8 rounded-xl booking-card" elevation="8">
          <v-card-title class="text-center text-h5 font-weight-bold booking-title">
            Bookiranje Stola
          </v-card-title>
          <v-form>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field v-model="ime" label="Ime" placeholder="Unesite ime" variant="outlined" density="comfortable" hide-details></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model="prezime" label="Prezime" placeholder="Unesite prezime" variant="outlined" density="comfortable" hide-details></v-text-field>
              </v-col>
            </v-row>
            <v-text-field v-model="email" label="Email" placeholder="Unesite email" variant="outlined" density="comfortable" hide-details class="mb-3"></v-text-field>
            <v-text-field v-model="telefon" label="Broj Telefona" placeholder="Unesite telefon" variant="outlined" density="comfortable" hide-details class="mb-3"></v-text-field>
            <v-text-field v-model="brojGostiju" label="Broj Gostiju" type="number" min="1" variant="outlined" density="comfortable" hide-details></v-text-field>
            <v-menu v-model="dateMenu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
              <template #activator="{ on, attrs }">
                <v-text-field v-model="datum" label="Datum rezervacije" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="datum" @input="dateMenu=false"></v-date-picker>
            </v-menu>
            <v-textarea v-model="napomena" label="Napomena (opcionalno)" placeholder="Unesite napomenu" auto-grow variant="outlined" class="mt-3"></v-textarea>
            <v-btn block class="mt-6 booking-btn" color="#b44545" dark size="large" elevation="4" @click="submitBooking">
              Potvrdi rezervaciju
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "BookingView",
  data() {
    return {
      ime: "",
      prezime: "",
      email: "",
      telefon: "",
      brojGostiju: 1,
      datum: null,
      dateMenu: false,
      napomena: "",
      gostId: null,
    };
  },
  created() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) this.gostId = user._id;
  },
  methods: {
    async submitBooking() {
      if (!this.ime || !this.prezime || !this.email || !this.telefon || !this.datum) {
        alert("Molimo popunite sve obavezne podatke!");
        return;
      }
      const datumString = this.datum instanceof Date ? this.datum.toISOString().split("T")[0] : this.datum;

      try {
        await axios.post("http://localhost:3000/api/bookings", {
          gostId: this.gostId,
          ime: this.ime,
          prezime: this.prezime,
          email: this.email,
          telefon: this.telefon,
          datum: datumString,
          brojGostiju: Number(this.brojGostiju),
          napomena: this.napomena,
        });

        alert("Rezervacija uspješna!");
        this.ime = this.prezime = this.email = this.telefon = this.napomena = "";
        this.brojGostiju = 1;
        this.datum = null;
      } catch (err) {
        console.error(err);
        alert(err.response?.data?.message || "Došlo je do greške pri rezervaciji!");
      }
    },
  },
};
</script>

<style scoped>
.booking-container { 
  min-height: 100vh; 
}

.booking-card { 
  background-color: #fdfdfd; 
  border-radius: 16px; 
  box-shadow: 0 6px 20px 
  rgba(0,0,0,0.08); 
}

.booking-title { 
  color: #b44545; 
  justify-content: center; 
  letter-spacing: 0.5px; 
}

.booking-btn { 
  font-weight: bold; 
  border-radius: 10px; 
  text-transform: none; 
  letter-spacing: 0.5px; 
  transition: all 0.25s ease; 
}

.booking-btn:hover { 
  transform: translateY(-2px); 
  box-shadow: 0 8px 20px 
  rgba(180, 69, 69, 0.4); 
}
</style>
