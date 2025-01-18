<template>
  <div class="menu">
    <h2>{{ restoranNaziv }} Menu</h2>

    <div class="tab-buttons">
      <button
        @click="selectCategory('pizze')"
        :class="{ active: selectedCategory === 'pizze' }"
      >
        Pizze
      </button>
      <button
        @click="selectCategory('prilozi')"
        :class="{ active: selectedCategory === 'prilozi' }"
      >
        Prilozi
      </button>
      <button
        @click="selectCategory('deserti')"
        :class="{ active: selectedCategory === 'deserti' }"
      >
        Deserti
      </button>
    </div>

    <div v-if="selectedCategoryItems.length > 0" class="menu-items">
      <div
        v-for="(item, index) in selectedCategoryItems"
        :key="index"
        class="menu-item"
      >
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <p class="price">{{ item.price }}€</p>
      </div>
    </div>
    <div v-else>
      <p>Nema dostupnih stavki u ovoj kategoriji.</p>
    </div>
  </div>
</template>

<script>
import { menuStavke } from '@/store';
export default {
  data() {
    return {
      restoranNaziv: 'Moj Restoran',
      selectedCategory: 'pizze',
    };
  },
  computed: {
    selectedCategoryItems() {
      return menuStavke.filter(
        (item) => item.category === this.selectedCategory
      );
    },
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style scoped>
.menu {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.tab-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.tab-buttons button {
  margin-right: 10px;
  cursor: pointer;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.tab-buttons button.active {
  background-color: #0056b3;
}

.menu-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.menu-item {
  width: calc(33.33% - 20px);
  margin: 10px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  background-color: white;
  transition: transform 0.3s ease;
}

.menu-item:hover {
  transform: translateY(-5px);
}

.price {
  font-weight: bold;
  color: #007bff;
}
</style>
