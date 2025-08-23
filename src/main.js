import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import store from './store';
import axios from "axios";

axios.defaults.baseURL = "/api";

const globalUserState = Vue.observable({
  loggedIn: !!localStorage.getItem("authToken"),
  type: localStorage.getItem("userType") || null,
  name: localStorage.getItem("username") || null,
});

Vue.prototype.$globalUser = globalUserState;

function setAuthHeader(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

setAuthHeader(localStorage.getItem("authToken"));

export function loginWithToken(token, userData = {}) {
  localStorage.setItem("authToken", token);
  localStorage.setItem("username", userData.username || "");
  localStorage.setItem("userType", userData.userType || "");
  
  setAuthHeader(token);
  
  globalUserState.loggedIn = true;
  globalUserState.name = userData.username || "";
  globalUserState.type = userData.userType || "";
}

export function logoutUser() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("username");
  localStorage.removeItem("userType");
  setAuthHeader(null);

  globalUserState.loggedIn = false;
  globalUserState.name = null;
  globalUserState.type = null;
}

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
