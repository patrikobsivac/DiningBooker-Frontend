<template>
  <div class="booking-wrapper">
    <div class="form-container">
      <h1>Bookiranja Stola</h1>
      <form @submit.prevent="onSubmit">
        <div class="form-grid">
          <div class="form-group">
            <label for="ime">Ime</label>
            <input
              type="text"
              class="form-control"
              id="ime"
              v-model="ime"
              placeholder="Unesite svoje ime"
              required
            />
          </div>
          <div class="form-group">
            <label for="prezime">Prezime</label>
            <input
              type="text"
              class="form-control"
              id="prezime"
              v-model="prezime"
              placeholder="Unesite svoje prezime"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            placeholder="Unesite svoju email adresu"
            required
          />
        </div>
        <div class="form-group">
          <label for="telefon">Broj Telefona</label>
          <input
            type="tel"
            class="form-control"
            id="telefon"
            v-model="brojTelefona"
            placeholder="Unesite broj telefona"
            required
          />
        </div>
        <div class="form-group">
          <label for="gosti">Broj Gostiju</label>
          <input
            type="number"
            class="form-control"
            id="gosti"
            v-model="brojGosti"
            placeholder="Unesite broj gostiju"
            required
          />
        </div>
        <button type="submit" class="btn btn-success">Bookiraj</button>
      </form>
    </div>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import { defineComponent } from 'vue';
import { rezervacija } from '@/store';

export default defineComponent({
  name: 'BookingView',
  data() {
    return {
      ime: '',
      prezime: '',
      email: '',
      brojTelefona: '',
      brojGosti: 1,
    };
  },
  methods: {
    onSubmit() {
      const newRezervacija = {
        ime: this.ime,
        prezime: this.prezime,
        email: this.email,
        brojTelefona: this.brojTelefona,
        brojGosti: this.brojGosti,
      };
      rezervacija.push(newRezervacija);
      console.log('Dodana rezervacija:', newRezervacija);
    },
  },
});
</script>

<style scoped>
.booking-wrapper {
  padding: 40px 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
}

.form-container {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #a72828;
  font-size: 2em;
  margin-bottom: 20px;
}

.form-grid {
  display: flex;
  gap: 15px;
  justify-content: space-between;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  font-size: 1em;
}

.form-control:focus {
  border-color: #a72828;
  outline: none;
}

button {
  width: 100%;
  padding: 14px;
  background-color: #a72828;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
}

button:hover {
  background-color: #882121;
}
</style>
