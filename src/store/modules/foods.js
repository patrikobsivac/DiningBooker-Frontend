// store/modules/foods.js
export default {
  state: {
    foods: []
  },
  mutations: {
    ADD_FOOD(state, food) {
      state.foods.push(food);
    },
    SET_FOODS(state, foods) {
      state.foods = foods;
    }
  },
  actions: {
    addFood({ commit }, food) {
      commit('ADD_FOOD', food);
    },
    allFoods({ commit }, foods) {
      commit('SET_FOODS', foods);
    }
  },
  getters: {
    allFoods: (state) => state.foods,
  }
};
