<template>
  <v-container>
    <h1>Dobrodošli!</h1>
    <hr>
    <br>
    <v-row>
      <v-col v-for="food in foods" :key="food.id" cols="12" md="4">
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
        foodName: "Menu",
        imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/032/483/662/small_2x/food-menu-food-recipe-logo-design-template-spoon-fork-with-old-paper-scroll-vintage-letter-illustration-vector.jpg"
      },
      {
        id: 3,
        foodName: "Radno vrijeme",
        imageUrl: "https://www.shutterstock.com/image-vector/clock-icon-trendy-flat-style-600nw-674379841.jpg"
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