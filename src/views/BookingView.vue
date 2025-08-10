<template>
  <v-container class="fill-height booking-container" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="5">
        <v-card class="pa-8 rounded-xl booking-card" elevation="8">
          <v-card-title class="text-center text-h5 font-weight-bold booking-title">
            Bookiranje Stola
          </v-card-title>
          <v-form>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Ime"
                  placeholder="Unesite svoje ime"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Prezime"
                  placeholder="Unesite svoje prezime"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>
            <v-text-field
              label="Email"
              placeholder="Unesite svoju email adresu"
              variant="outlined"
              density="comfortable"
              hide-details
              class="mb-3"
            ></v-text-field>
            <v-text-field
              label="Broj Telefona"
              placeholder="Unesite broj telefona"
              variant="outlined"
              density="comfortable"
              hide-details
              class="mb-3"
            ></v-text-field>
            <v-text-field
              label="Broj Gostiju"
              placeholder="1"
              type="number"
              min="1"
              variant="outlined"
              density="comfortable"
              hide-details
            ></v-text-field>
            <v-btn
              block
              class="mt-6 booking-btn"
              color="#b44545"
              dark
              size="large"
              elevation="4"
            >
              Bookiraj
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BookingView",
};
</script>

<style scoped>
.booking-container {
  min-height: 100vh;
}

.booking-card {
  background-color: #fdfdfd;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
}

.booking-title {
  color: #b44545;
  justify-content: center;
  letter-spacing: 0.5px;
}

.booking-btn {
  font-weight: bold;
  border-radius: 10px;
  text-transform: none;
  letter-spacing: 0.5px;
  transition: all 0.25s ease;
}

.booking-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(180, 69, 69, 0.4);
}
</style>
