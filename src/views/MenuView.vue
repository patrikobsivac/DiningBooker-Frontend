<template>
  <v-container fluid>
    <v-row align="start" justify="center" class="mt-6">
      <v-col cols="12" sm="10" md="8">
        <v-card class="pa-8 rounded-xl booking-card" elevation="8">
          <v-card-title class="text-center text-h5 font-weight-bold booking-title">
            Jelovnik
          </v-card-title>
          <v-tabs v-model="tab" background-color="#E0E0E0" dark color="blue accent-3" slider-color="blue" class="mb-5" justify="center">
            <v-tab @click="updateCategory('pizze')">Pizze</v-tab>
            <v-tab @click="updateCategory('prilozi')">Prilozi</v-tab>
            <v-tab @click="updateCategory('deserti')">Deserti</v-tab>
          </v-tabs>
          <v-row>
            <v-col v-for="item in filteredMenuItems" :key="item._id" cols="12" sm="6" md="4">
              <v-card class="pa-4 rounded-xl booking-card" elevation="4">
                <v-card-title class="text-h6">{{ item.name }}</v-card-title>
                <v-card-subtitle class="text-subtitle-1">{{ item.price }}€</v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "MenuView",
  data() {
    return {
      tab: "pizze",
      menuItems: [],
    };
  },
  computed: {
    filteredMenuItems() {
      return this.menuItems.filter(item => item.category === this.tab);
    },
  },
  created() {
    this.fetchMenus();
  },
  methods: {
    updateCategory(category) {
      this.tab = category;
    },
    async fetchMenus() {
      try {
        const response = await axios.get("http://localhost:3000/api/menus");
        this.menuItems = response.data;
      } catch (error) {
        console.error("Greška pri dohvaćanju menija:", error);
      }
    },
  },
};
</script>

<style scoped>
.booking-container {
  min-height: auto; 
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

.v-card-title {
  font-weight: 600;
}

.v-card-subtitle {
  color: #555;
}

.v-tab {
  text-transform: none;
}

.mt-6 {
  margin-top: 24px;
}
</style>
