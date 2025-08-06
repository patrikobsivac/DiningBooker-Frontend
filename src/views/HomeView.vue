<template>
  <v-container>
    <h1>Dobrodošli!</h1>
    <hr>
    <br>
    <v-row>
      <v-col cols="12" md="6" v-for="food in foods.slice(0, 2)" :key="food.id">
        <v-card class="mx-auto" max-width="350" color="#e9e8eb">
          <v-img 
            :src="food.imageUrl" 
            height="180px" 
            class="image-border" 
            @click="setStates(food.id)">
          </v-img>
          <v-card-title>{{ food.foodName }}</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="mx-auto" max-width="350" color="#e9e8eb">
          <v-img 
            :src="foods[2].imageUrl" 
            height="180px" 
            class="image-border" 
            @click="setStates(foods[2].id)">
          </v-img>
          <v-card-title>{{ foods[2].foodName }}</v-card-title>
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
        foodName: "Radno Vrijeme",
        imageUrl: "https://www.shutterstock.com/image-vector/clock-icon-trendy-flat-style-600nw-674379841.jpg"
      },
      {
        id: 3,
        foodName: "Menu",
        imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/032/483/662/small_2x/food-menu-food-recipe-logo-design-template-spoon-fork-with-old-paper-scroll-vintage-letter-illustration-vector.jpg"
      }
    ]
  }),
   methods: {
    ...mapMutations({
      setFoodIme: "setFoodIme",
    }),
    formatThousands(res) {
      return new Intl.NumberFormat('en-US').format(res);
    },
    setStates(foodId) {
      const selectedFood = this.foods.find(food => food.id === foodId);
      this.setFoodIme(selectedFood.foodName);
      this.$router.push({ name: 'foodDetails', params: { id: foodId } });
    }
  }
};
</script>

<style scoped>
.image-border {
  border: 2px solid #000; 
  border-radius: 5px;
}
</style>