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
      <p class="no-items">Nema dostupnih stavki u ovoj kategoriji.</p>
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
        const response = await axios.get("https://diningbooker-backend.onrender.com/api/menus");
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
  max-width: 1000px;
  margin: 20px auto;
  padding: 30px 25px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  text-align: center;
}

.menu h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 40px;
  letter-spacing: 1px;
}

.tab-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 30px;
}

.tab-buttons button {
  cursor: pointer;
  padding: 12px 24px;
  background-color: #e2dedecc;
  color: #333;
  border: 2px solid transparent;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tab-buttons button:hover {
  background-color: #007bff;
  color: #fff;
  border-color: #1b1b1b;
}

.tab-buttons button.active {
  background-color: #007bff;
  color: #fff;
  border-color: #1b1b1b;
}

.menu-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.menu-item {
  width: 250px;
  background: #ffffffda;
  border-radius: 14px;
  padding: 20px;
  border: 1px solid #000000bb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.menu-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
}

.menu-item h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #333;
}

.price {
  font-weight: bold;
  font-size: 1.2rem;
  color: #007bff;
  margin-top: 5px;
}

.no-items {
  color: #666;
  font-style: italic;
  margin-top: 20px;
}
</style>
