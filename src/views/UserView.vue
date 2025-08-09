<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <v-card elevation="8" class="pa-5 rounded-lg">
          <v-card-title class="text-h5 font-weight-bold text-center">
            Informacije o korisniku
          </v-card-title>
          <v-divider class="mb-4"></v-divider>
          <v-card-text>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <strong>Ime i Prezime:</strong> {{ trenutniKorisnik.ime }} {{ trenutniKorisnik.prezime }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <strong>Email:</strong> {{ trenutniKorisnik.email }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    <strong>Broj Telefona:</strong> {{ trenutniKorisnik.brojTelefona }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card elevation="8" class="pa-5 rounded-lg">
          <v-card-title class="text-h5 font-weight-bold text-center">
            Prošle rezervacije
          </v-card-title>
          <v-divider class="mb-4"></v-divider>
          <v-card-actions class="justify-center">
            <v-btn
              color="red darken-1"
              dark
              rounded
              large
              @click="click">
              Nova rezervacija
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'UserView',
  data() {
    return {
      /* work in progress*/
    };
  },
  methods: {
    click() {
      this.$router.replace({ name: 'BookingView' });
    },
  },
};
</script>

<style scoped>
.v-container {
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  min-height: 100vh;
  padding-top: 40px;
}
</style>
