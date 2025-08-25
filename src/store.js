// src/store.js
import { reactive } from "vue";

export const store = reactive({
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  
  login(user, token) {
    this.currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("authToken", token);
  },

  logout() {
    this.currentUser = null;
    localStorage.removeItem("currentUser");
    localStorage.removeItem("authToken");
  }
});
