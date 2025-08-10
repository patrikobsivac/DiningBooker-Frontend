<template>
  <v-container>
    <div style="text-align: center;">
    <h1 class="welcome-title">Dobrodošli!</h1>
    </div>
    <div class="welcome-line"></div>
    <br>
    <v-row>
      <v-col cols="12" md="6" v-for="food in foods.slice(0, 2)" :key="food.id" class="pa-3">
        <v-card
          class="mx-auto hoverable-card rounded-lg card-bg fade-in-up"
          max-width="350"
          elevation="6"
          @click="goToPage(food.foodName)"
          ripple
        >
          <v-img 
            :src="food.imageUrl" 
            height="180px" 
            class="image-border"
          />
          <v-card-title class="text-center-card">{{ food.foodName }}</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6" class="pa-3">
        <v-card
          class="mx-auto hoverable-card rounded-lg card-bg fade-in-up"
          style="animation-delay: 0.4s;"
          max-width="350"
          elevation="6"
          @click="goToPage(foods[2].foodName)"
          ripple
        >
          <v-img 
            :src="foods[2].imageUrl" 
            height="180px" 
            class="image-border"
          />
          <v-card-title class="text-center-card">{{ foods[2].foodName }}</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: 'HomeView',
  data: () => ({
    foods: [
      {
        id: 1,
        foodName: "Obavijest",
        imageUrl: "https://static.vecteezy.com/system/resources/previews/001/760/457/non_2x/megaphone-loudspeaker-making-announcement-vector.jpg"
      },
      {
        id: 2,
        foodName: "Radno vrijeme",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png"
      },
      {
        id: 3,
        foodName: "Jelovnik",
        imageUrl: "https://previews.123rf.com/images/sohell/sohell2201/sohell220101557/181425734-food-menu-restaurant-icon-design-vector-template-illustration.jpg"
      }
    ]
  }),
  methods: {
    ...mapMutations(["setFoodId"]),
    setStates(foodId) {
      this.setFoodId(foodId);
    },
    goToPage(foodName) {
      switch (foodName) {
        case "Obavijest":
          this.$router.push("#");
          break;
        case "Radno vrijeme":
          this.$router.push("/radnovrijeme");
          break;
        case "Jelovnik":
          this.$router.push("#");
          break;
        default:
          console.warn("Nepoznato:", foodName);
      }
    }
  }
}
</script>

<style scoped>
v-container {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  padding-top: 40px;
  padding-bottom: 40px;
}

.hoverable-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border-radius: 16px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.hoverable-card:hover {
  transform: translateY(-6px) scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.image-border {
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  border: none;
}

.text-center-card {
  text-align: center;
  justify-content: center;
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
}

.card-bg {
  background-color: #f8f8fa !important;
}

.welcome-title {
  font-family: 'Poppins', sans-serif;
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 10px 20px;
  border-radius: 12px;
  display: inline-block;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: fadeInUp 1s ease-out;
}

.welcome-line {
  width: 100px;
  height: 4px;
  background-color: #2c3e50;
  margin: 0 auto 20px auto;
  border-radius: 4px;
}

.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.9s ease-out forwards;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
