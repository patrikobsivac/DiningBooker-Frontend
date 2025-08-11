<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">Jelovnik</h1>
        <v-tabs
          v-model="tab"
          background-color="#E0E0E0"
          dark
          color="blue accent-3"
          slider-color="blue"
          class="mb-5">
          <v-tab @click="updateCategory('pice')">Pizze</v-tab>
          <v-tab @click="updateCategory('prilozi')">Prilozi</v-tab>
          <v-tab @click="updateCategory('deserti')">Deserti</v-tab>
        </v-tabs>
        <v-row>
          <v-col v-for="item in menuItems" :key="item.name" cols="6" sm="4" md="3">
            <v-card>
              <v-card-title class="text-h6">{{ item.name }}</v-card-title>
              <v-card-subtitle class="text-h6">{{ item.price }}€</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      menuItems: [
        { name: 'Margherita', price: 9, category: 'pice' },
        { name: 'Capriciosa', price: 9.5, category: 'pice' },
        { name: 'Contadina', price: 11.2, category: 'pice' },
        { name: 'Salami', price: 10.7, category: 'pice' },
        { name: 'Vegetarijana', price: 10.7, category: 'pice' },
        { name: 'Quattro formaggi', price: 10, category: 'pice' },
      ],
    };
  },
  methods: {
    updateCategory(category) {
      this.tab = category;
    },
  },
};
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}
</style>