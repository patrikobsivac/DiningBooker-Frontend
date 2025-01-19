<template>
  <div class="about">
    <h1>O aplikaciji</h1>
    <div id="description-container">
      DiningBooker je jedinstvena aplikacija koja pruža uslugu za brzu i
      jednostavnu rezervaciju stolova u gradskim restoranima. Naš je zadatak
      učiniti Vaše iskustvo traženja pravog ugostiteljskog objekta za obiteljsku
      večeru, poslovni sastanak ili večer sa dragim prijateljima i obitelji.
      Zahvaljujući DiningBooker, možete si pronaći slobodne termine, odabrati
      restorane koji vam se najviše sviđaju i rezervirati svoj stol u nekoliko
      klikova. DiningBooker aplikacija će Vas voditi do najboljeg za sve kojima
      je stalo do restorana s dobrim pogledom na more, ugodan ambijent za dvoje
      ili restoran s bogatom ponudom jelovnika. Naš sustav obavijesti nikada
      neće dopustiti da propustite svoju rezervaciju, a naš tim za korisnike
      uvijek je dostupan za odgovore na Vaša pitanja.
    </div>
    <button @click="goToHome">POVRATAK NA POČETNU</button>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  methods: {
    goToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
.about {
  background-color: #121212e9;
  color: white;
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

h1 {
  font-size: 2.5em;
  color: white;
  font-weight: bold;
}

#description-container {
  font-size: 1.2em;
  margin-top: 20px;
  line-height: 1.6;
  text-align: justify;
}

button {
  background-color: #a72828;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #882121;
}
</style>
