<template>
  <v-container class="fade-in-container" fluid>
    <v-row justify="center" align="center" style="min-height: 100vh;">
      <v-col cols="12" md="7" lg="5">
        <v-card class="custom-card pa-6" outlined>
          <v-card-title class="primary--text headline font-weight-bold">
            Radno vrijeme
          </v-card-title>
          <v-card-text class="custom-card-text">
            <p><strong>Ponedjeljak:</strong> Zatvoreno</p>
            <p><strong>Utorak - Petak:</strong> 10:00 - 22:00</p>
            <p><strong>Subota - Nedjelja:</strong> 12:00 - 20:00</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" outlined to="/">
              Natrag na početnu
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AlertView",
};
</script>

<style scoped>
.fade-in-container {
  animation: fadeInUp 0.8s ease forwards;
  padding-top: 40px;
  padding-bottom: 40px;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.custom-card {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #f8f8fa !important;
  max-width: 450px;
  margin: 0 auto; 
}

.primary--text {
  color: #1e88e5 !important;
}

.custom-card-text {
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  line-height: 1.6;
  color: #333;
  padding-top: 15px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
