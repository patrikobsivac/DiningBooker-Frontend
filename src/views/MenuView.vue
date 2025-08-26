<template>
  <div class="menu">
    <h2>Jelovnik</h2>
    <div class="tab-buttons">
      <button v-for="category in categories" :key="category"  @click="selectCategory(category)" :class="{ active: selectedCategory === category }">{{ category }}</button>
    </div>
    <div v-if="selectedCategoryItems.length > 0" class="menu-items">
      <div v-for="item in selectedCategoryItems" :key="item._id" class="menu-item">
        <h3>{{ item.name }}</h3>
        <p class="price">{{ item.price }}€</p>
      </div>
    </div>
    <div v-else>
      <p>Nema dostupnih stavki u ovoj kategoriji.</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MenuView",
  data() {
    return {
      selectedCategory: "",
      menus: [],
    };
  },
  computed: {
    categories() {
      return [...new Set(this.menus.map((m) => m.category))];
    },
    selectedCategoryItems() {
      return this.menus.filter(
        (item) => item.category === this.selectedCategory
      );
    },
  },
  methods: {
    async fetchMenus() {
      try {
        const response = await axios.get("http://localhost:3000/api/menus");
        this.menus = response.data;
        if (this.menus.length > 0) {
          this.selectedCategory = this.menus[0].category;
        }
      } catch (err) {
        console.error("Greška kod dohvaćanja menija:", err);
      }
    },
    selectCategory(category) {
      this.selectedCategory = category;
    },
  },
  mounted() {
    this.fetchMenus();
  },
};
</script>

<style scoped>
.menu {
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  background-color: #e9e8eb;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.tab-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 10px;
}

.tab-buttons button {
  cursor: pointer;
  padding: 10px 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.tab-buttons button.active {
  background-color: #0056b3;
}

.menu-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.menu-item {
  width: 250px;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.menu-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
}

.price {
  font-weight: bold;
  font-size: 18px;
  color: #007bff;
  margin: 8px 0;
}
</style>
