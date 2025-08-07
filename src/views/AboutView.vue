<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <transition name="fade-in">
          <v-card
            v-if="showCard"
            class="glass-card pa-5"
            elevation="10">
            <v-card-title class="headline font-weight-bold mb-4">
              O nama
            </v-card-title>
            <v-card-text class="body-1">
              <p>
                <strong>DiningBooker</strong> je jedinstvena aplikacija koja pruža uslugu za brzu i
                jednostavnu rezervaciju stolova u gradskim restoranima.
              </p>
              <p>
                Naš je zadatak učiniti Vaše iskustvo traženja pravog ugostiteljskog objekta za obiteljsku večeru,
                poslovni sastanak ili večer sa dragim prijateljima i obitelji.
              </p>
              <p>
                Zahvaljujući DiningBooker, možete si pronaći slobodne termine, odabrati restorane koji vam se najviše sviđaju
                i rezervirati svoj stol u nekoliko klikova.
              </p>
              <p>
                DiningBooker aplikacija će Vas voditi do najboljeg za sve kojima je stalo do restorana s dobrim pogledom na more,
                ugodan ambijent za dvoje ili restoran s bogatom ponudom jelovnika.
              </p>
              <p>
                Naš sustav obavijesti nikada neće dopustiti da propustite svoju rezervaciju, a naš tim za korisnike
                uvijek je dostupan za odgovore na Vaša pitanja.
              </p>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" outlined to="/">
                Natrag na početnu
              </v-btn>
            </v-card-actions>
          </v-card>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      showCard: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showCard = true;
    }, 100); 
  },
};
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  backdrop-filter: blur(6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.fade-in-enter-active {
  transition: opacity 0.9s ease, transform 0.9s ease;
}
.fade-in-enter {
  opacity: 0;
  transform: translateY(30px);
}
</style>
