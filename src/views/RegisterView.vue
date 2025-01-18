<template>
  <div class="register-container">
    <div class="register-box">
      <h1 class="title">Registracija</h1>
      <form @submit.prevent="onSubmit">
        <div class="input-group">
          <label for="ime">Ime</label>
          <input
            v-model="formData.ime"
            type="text"
            id="name"
            placeholder="Unesite ime"
          />
        </div>
        <div class="input-group">
          <label for="surname">Prezime</label>
          <input
            v-model="formData.prezime"
            type="text"
            id="surname"
            placeholder="Unesite prezime"
          />
        </div>
        <div class="input-group">
          <label for="email">E-mail</label>
          <input
            v-model="formData.email"
            type="email"
            id="email"
            placeholder="Unesite e-mail"
          />
        </div>
        <div class="input-group">
          <label for="phone">Broj mobitela</label>
          <input
            v-model="formData.brojTelefona"
            type="tel"
            id="phone"
            placeholder="Unesite broj mobitela"
          />
        </div>
        <div class="input-group">
          <label for="password">Lozinka</label>
          <input
            v-model="formData.password"
            type="password"
            id="password"
            placeholder="Unesite lozinku"
          />
        </div>
        <div class="input-group">
          <label for="confirmPassword">Ponovite lozinku</label>
          <input
            v-model="formData.confirmPassword"
            type="password"
            id="confirmPassword"
            placeholder="Ponovi lozinku"
          />
        </div>
        <button type="submit" class="btn">Registriraj se</button>
      </form>
    </div>
  </div>
</template>

<script>
import { korisnik } from '@/store';
export default {
  data() {
    return {
      formData: {
        ime: '',
        prezime: '',
        email: '',
        brojTelefona: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  methods: {
    onSubmit() {
      debugger;
      if (this.formData.password === this.formData.confirmPassword) {
        const newKorisnik = {
          id: korisnik.length + 1,
          ime: this.formData.ime,
          prezime: this.formData.prezime,
          password: this.formData.password,
          email: this.formData.email,
          password: this.formData.password,
        };
        user.push(newKorisnik);
      }
      console.log(korisnik);
    },
  },
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1e1e2f;
}
.register-box {
  background-color: #2b2b3c;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
}
.title {
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
}
.input-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  font-size: 0.875rem;
  color: #d1d1e0;
  margin-bottom: 0.25rem;
}
input {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #383850;
  color: #ffffff;
}
input:focus {
  outline: 2px solid #4caf50;
}
.btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}
.btn:hover {
  background-color: #45a045;
}
</style>
