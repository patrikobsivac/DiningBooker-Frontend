<template>
  <div>
    <h1>DiningBooker</h1>
    <div>
      <a href="/obavijest">
        <button type="button" class="btn-main mt-3">Obavijesti</button>
      </a>
      <a href="/posude">
        <button type="button" class="btn-main mt-3">Menu</button>
      </a>
      <a href="/bookiraj">
        <button type="button" class="btn-main mt-3">Rezervacija</button>
      </a>
      <br />
      <h1>Hvala što ste s nama!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
  width: 100%;
  margin-top: 20px;
}

.btn-main {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-main:hover {
  background-color: #0056b3;
}

h1 {
  text-align: center;
}

button {
  margin-top: 10px;
}
</style>
