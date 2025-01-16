<template>
  <div class="main-container">
    <div class="flex-row"></div>
    <div class="flex-row-d">
      <div class="ellipse"></div>

      <p></p>
    </div>
    <div class="flex-row-b">
      <div class="podaci-o-osobi">
        <span class="podaci-o-kupcu"
          ><h1>Podaci o Kupcu</h1>
          <br />
          <h3>{{ trenutniKorisnik.ime }} {{ trenutniKorisnik.prezime }}</h3>
          <br />

          <h3>
            {{ trenutniKorisnik.email }}<br />{{ trenutniKorisnik.brojTelefona
            }}<br />
          </h3>
          <br />
        </span>
      </div>
      <div class="podaci-o-narudbama">
        <span class="prosle-rezervacije">Prošle Rezervacije</span>
      </div>
      <button class="rectangle-button" @click="click">Nova rezervacija</button>
    </div>
    <div class="slika-div"></div>
    <div class="slika-div-1"></div>
  </div>
</template>

<script>
import { trenutniKorisnik } from '@/store';
export default {
  name: 'UserView',
  components: {},
  data() {
    return {
      trenutniKorisnik,
    };
  },
  methods: {
    click() {
      this.$router.replace({ name: 'rezervacija' });
    },
  },
};
</script>

<style></style>
