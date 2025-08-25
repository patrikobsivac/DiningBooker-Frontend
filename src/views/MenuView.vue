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
          <div class="menu-row">
            <v-row class="flex-nowrap" dense>
              <v-col v-for="item in filteredMenuItems" :key="item._id" cols="12" sm="6" md="4" class="d-inline-block">
                <v-card class="pa-4 rounded-xl booking-card menu-card" elevation="4">
                  <v-img v-if="item.image" :src="item.image" height="150" class="mb-3" contain></v-img>
                  <v-card-title class="text-h6">{{ item.name }}</v-card-title>
                  <v-card-subtitle class="text-subtitle-1">{{ item.price }}€</v-card-subtitle>
                  <v-btn color="#b44545" class="mt-2 white--text" @click="addToOrder(item)">
                    Dodaj u narudžbu
                  </v-btn>
                </v-card>
              </v-col>
            </v-row>
          </div>
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
    addToOrder(item) {
      console.log("Dodano u narudžbu:", item);
      alert(`Dodano: ${item.name}`);
    },
  },
};
</script>

<style scoped>
.booking-card {
  background-color: #fdfdfd;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  transition: all 0.25s ease;
}
.booking-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(180, 69, 69, 0.3);
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

.menu-row {
  overflow-x: auto;
  padding-bottom: 10px;
}
.menu-row::-webkit-scrollbar {
  height: 6px;
}
.menu-row::-webkit-scrollbar-thumb {
  background-color: #b44545;
  border-radius: 3px;
}
.menu-card {
  min-width: 250px;
}
</style>
