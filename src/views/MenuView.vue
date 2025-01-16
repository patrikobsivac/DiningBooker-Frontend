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

<style scoped></style>
