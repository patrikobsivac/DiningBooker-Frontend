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
            class="image-border hoverable-image" 
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
            class="image-border hoverable-image" 
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
        foodName: "Radno vrijeme",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png"
      },
      {
        id: 3,
        foodName: "Menu",
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
          this.$router.push("/#");
          break;
        case "Radno vrijeme":
          this.$router.push("/#");
          break;
        case "Menu":
          this.$router.push("/#");
          break;
        default:
          console.log("Nepoznata stranica:", foodName);
      }
    }
  }
}
</script>


<style scoped>
.image-border {
  border: 2px solid #000; 
  border-radius: 5px;
}
.hoverable-image {
  transition: transform 0.3s ease;
  cursor: pointer;
}
.hoverable-image:hover {
  transform: scale(1.05);
}
</style>