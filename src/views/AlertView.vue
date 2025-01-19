<template>
  <div class="alert">
    <h1>Obavijest</h1>
    <div class="working-hours">
      <h2>Radno vrijeme</h2>
      <ul>
        <li><strong>Ponedjeljak:</strong> Zatvoreno</li>
        <li><strong>Utorak - Petak:</strong> 10:00h - 22:00h</li>
        <li><strong>Subota - Nedjelja:</strong> 12:00h - 20:00h</li>
      </ul>
    </div>
    <button @click="goToHome">POVRATAK NA POČETNU</button>
  </div>
</template>

<script>
export default {
  name: 'AlertView',
  methods: {
    goToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
.alert {
  background-color: #121212e9;
  color: white;
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

h1 {
  color: #d92222;
  font-size: 25px;
}

h2 {
  color: #ffffff;
  font-size: 20px;
  margin-top: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 16px;
  color: #ffffff;
  margin: 5px 0;
}

strong {
  color: #ffffffdd;
}
</style>
