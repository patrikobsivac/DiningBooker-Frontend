<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center mb-5">PRIJAVA</h1>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="inputMail">Email</label>
            <input
              v-model="username"
              type="email"
              class="form-control"
              id="inputmail"
              aria-describedby="emailHelp"
              placeholder="Unesi Email"
            />
          </div>
          <div class="form-group">
            <label for="passwrd">Lozinka</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="Passwrd"
              placeholder="Unesi Zaporku"
            />
          </div>
          <button type="submit" class="btn btn-primary mt-3">Prijavi se</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { korisnik } from '@/store';
import { trenutniKorisnik } from '@/store';
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log('Prijava', this.username);
      const foundKorisnik = user.find(
        (korisnik) => korisnik.email === this.username
      );
      if (foundKorisnik && foundKorisnik.password === this.password) {
        trenutniKorisnik.authenticated = true;
        trenutniKorisnik.email = foundKorisnik.email;
        trenutniKorisnik.id = foundKorisnik.id;
        trenutniKorisnik.brojTelefona = foundKorisnik.brojTelefona;
        trenutniKorisnik.ime = foundKorisnik.ime;
        trenutniKorisnik.prezime = foundKorisnik.prezime;
        console.log(trenutniKorisnik);
        console.log(korisnik);
        this.$router.replace({ name: 'korisnički prikaz' });
      } else {
        console.log('Nevažeće username ili lozinka');
      }
    },
  },
};
</script>
