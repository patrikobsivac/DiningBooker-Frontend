<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6 bg-light p-5 rounded shadow">
        <h1 class="text-center mb-4 text-primary">REGISTRACIJA</h1>
        <form @submit.prevent="onSubmit" class="form">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group mb-3">
                <label for="inputName" class="form-label">Ime</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  v-model="formData.name"
                  placeholder="Unesi ime"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mb-3">
                <label for="inputSurename" class="form-label">Prezime</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputSurename"
                  v-model="formData.surname"
                  placeholder="Unesi prezime"
                  required
                />
              </div>
            </div>
          </div>
          <div class="form-group mb-3">
            <label for="emailAdr" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="emailAdr"
              v-model="formData.email"
              placeholder="Unesi email"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="phoneNumbr" class="form-label">Broj Mobitela</label>
            <input
              type="tel"
              class="form-control"
              id="phoneNumbr"
              v-model="formData.phoneNumber"
              placeholder="Unesi Broj Telefona"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="passwrd" class="form-label">Lozinka</label>
            <input
              type="password"
              class="form-control"
              id="passwrd"
              v-model="formData.password"
              placeholder="Unesi Lozinku"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="repeatPasswrd" class="form-label">Ponovi Lozinku</label>
            <input
              type="password"
              class="form-control"
              id="repeatPasswrd"
              v-model="formData.confirmPassword"
              placeholder="Ponovno unesi lozinku"
              required
            />
          </div>
          <div class="form-group text-center">
            <button type="submit" class="btn btn-primary mt-3 w-100">
              Registriraj se
            </button>
          </div>
        </form>
      </div>
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
          name: this.formData.ime,
          surname: this.formData.prezime,
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
.container {
  background-color: #f8f9fa;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form {
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.form-label {
  font-weight: 500;
  color: #495057;
}
.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}
.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}
</style>
