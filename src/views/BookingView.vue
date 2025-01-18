<template>
  <div class="wrapper">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1>Rezervacija stola</h1>
        <form @submit.prevent="handleSubmit">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="firstName">Ime</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  v-model="firstName"
                  placeholder="Unesite ime"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="lastName">Prezime</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  v-model="lastName"
                  placeholder="Unesite prezime"
                  required
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="emailAddress">Email</label>
            <input
              type="email"
              class="form-control"
              id="emailAddress"
              v-model="emailAdresa"
              placeholder="Unesite email"
              required
            />
          </div>
          <div class="form-group">
            <label for="mobileNumber">Mobitel</label>
            <input
              type="tel"
              class="form-control"
              id="mobileNumber"
              v-model="brojTelefona"
              placeholder="Unesite broj mobitela"
              required
            />
          </div>
          <div class="form-group">
            <label for="numberOfGuests">Broj Osoba</label>
            <input
              type="number"
              class="form-control"
              id="numberOfGuests"
              v-model="brojGosti"
              placeholder="Unesite broj osoba"
              required
            />
          </div>
          <div>
            <v-date-picker></v-date-picker>
          </div>
          <button type="submit" class="btn btn-success mt-3">Bookiraj</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import { defineComponent } from 'vue';
import { rezervacija } from '@/store';
export default defineComponent({
  data() {
    return {
      ime: '',
      prezime: '',
      emailAdresa: '',
      brojTelefona: '',
      brojGosti: 1,
    };
  },
  methods: {
    handleSubmit() {
      const newRezervacija = {
        ime: this.ime,
        prezime: this.prezime,
        email: this.emailAdresa,
        telefon: this.brojTelefona,
        gosti: this.brojGosti,
      };
      rezervacija.push(newRezervacija);
      console.log('Nova rezervacija:', newRezervacija);
    },
  },
});
</script>
