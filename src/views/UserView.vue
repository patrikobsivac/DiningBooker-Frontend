<template>
  <div class="main-container">
    <div class="user-details-section">
      <div class="user-info">
        <h1>Informacije o korisniku</h1>
        <h3>
          Ime i Prezime: {{ trenutniKorisnik.ime }}
          {{ trenutniKorisnik.prezime }}
        </h3>
        <h3>Email: {{ trenutniKorisnik.email }}</h3>
        <h3>Broj Telefona: {{ trenutniKorisnik.brojTelefona }}</h3>
      </div>
    </div>

    <div class="reservations-section">
      <h2>Prošle rezervacije</h2>
      <button class="new-reservation-button" @click="click">
        Nova rezervacija
      </button>
    </div>
  </div>
</template>

<script>
import { trenutniKorisnik } from '@/store';
export default {
  name: 'UserView',
  data() {
    return {
      trenutniKorisnik,
    };
  },
  methods: {
    click() {
      this.$router.replace({ name: 'BookingView' });
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f9f9f9;
  align-items: center;
}

.user-details-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e3e3e3;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.user-info h1,
.user-info h3 {
  margin: 5px 0;
  color: #333;
  text-align: center;
}

.reservations-section {
  background-color: #e3e3e3;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reservations-section h2 {
  margin-bottom: 15px;
  color: #333;
}

.new-reservation-button {
  padding: 10px 20px;
  background-color: #e01515;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
