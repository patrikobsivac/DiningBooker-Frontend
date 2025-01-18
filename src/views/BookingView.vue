<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1>Odaberi stol</h1>
        <form @submit.prevent="onSubmit">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="inputName">Ime</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  v-model="ime"
                  placeholder="Enter name"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="inputSurename">Prezime</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputSurename"
                  v-model="prezime"
                  placeholder="Unesi prezime"
                  required
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="inputEmail">Email adresa</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              v-model="email"
              placeholder="Unesi email"
              required
            />
          </div>
          <div class="form-group">
            <label for="phoneNumbr">Broj Mobitela</label>
            <input
              type="tel"
              class="form-control"
              id="phoneNumbr"
              v-model="brojTelefona"
              placeholder="Unesi broj mobitela"
              required
            />
          </div>
          <div class="form-group">
            <label for="brOsoba">Broj Osoba</label>
            <input
              type="number"
              class="form-control"
              id="brOsoba"
              v-model="brojOsoba"
              placeholder="Unesi Broj Osoba"
              required
            />
          </div>
          <div>
            <v-date-picker></v-date-picker>
          </div>
          <button type="submit" class="btn btn-primary mt-3">
            Bookiraj stol
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import { defineComponent } from 'vue';
import { rezervacija } from '@/store';
export default {
  data() {
    return {
      ime: '',
      prezime: '',
      email: '',
      brojTelefona: '',
      brojOsoba: 0,
    };
  },
  methods: {
    onSubmit() {
      const newRezervacija = {
        ime: this.ime,
        prezime: this.prezime,
        email: this.email,
        brojTelefona: this.brojTelefona,
        brojOsoba: this.brojOsoba,
      };
      rezervacija.push(newRezervacija);
      console.log(rezervacija);
    },
  },
};
</script>
