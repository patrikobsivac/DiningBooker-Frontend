<template>
  <div class="container">
    <h1>DiningBooker</h1>

    <div class="button-group">
      <router-link to="/obavijest">
        <button type="button" class="btn btn-success mt-3">Obavijesti</button>
      </router-link>

      <router-link to="/izbornik">
        <button type="button" class="btn btn-success mt-3">Izbornik</button>
      </router-link>

      <router-link to="/bookiraj">
        <button type="button" class="btn btn-success mt-3">
          Bookiraj stol
        </button>
      </router-link>
    </div>

    <footer>
      <h2>Hvala što ste odabrali nas!</h2>
    </footer>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  padding: 20px;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

button {
  font-size: 16px;
  padding: 10px 20px;
  background-color: #a72828;
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #882121;
}

h1 {
  font-size: 30px;
}

h2 {
  color: black;
}

footer h2 {
  margin-top: 40px;
  font-style: italic;
}
</style>

<script>
export default {
  name: 'HomeView',
};
</script>
