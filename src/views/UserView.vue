<template>
  <div class="main-container">
    <div class="flex-row"></div>
    <div class="flex-row-d">
      <div class="ellipse"></div>

      <p></p>
    </div>
    <div class="flex-row-b">
      <div class="podaci-o-osobi">
        <span class="podaci-o-korisniku"
          ><h1>Podaci o korisniku</h1>
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
      <div class="podaci-o-narudzbama">
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

<style>
.ellipse {
  position: absolute;
  width: 164px;
  height: 144px;
  top: 0;
  left: 0;

  z-index: 7;
}
.ime-prezime {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  width: 285px;
  height: 136px;
  top: 8px;
  left: 190px;
  color: #000000;
  font-family: Inter, var(--default-font-family);
  font-size: 40px;
  font-weight: 400;
  line-height: 48.409px;
  text-align: left;
  z-index: 8;
}
.flex-row-b {
  position: relative;
  width: 1136px;
  height: 676px;
  margin: 18px 0 0 147px;
  z-index: 13;
}
.podaci-o-osobi {
  position: absolute;
  width: 441px;
  height: 676px;
  top: 0;
  left: 0;
  background: #d9d9d9;
  z-index: 9;
  border-radius: 45px;
}

.podaci-o-narudzbama {
  position: absolute;
  width: 650px;
  height: 532px;
  top: 0;
  left: 486px;
  background: #d9d9d9;
  z-index: 6;
  border-radius: 45px;
}
.prosle-rezervacije {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: 48px;
  top: 26px;
  left: 72px;
  color: #000000;
  font-family: Inter, var(--default-font-family);
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  text-align: left;
  white-space: nowrap;
  z-index: 11;
}
.rectangle-button {
  position: absolute;
  width: 442px;
  height: 103px;
  top: 573px;
  left: 685px;
  cursor: pointer;
  background: #e01515;
  border: none;
  z-index: 12;
}
</style>
