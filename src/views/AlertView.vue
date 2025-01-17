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
  </div>
</template>

<style>
.alert {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
}

h1 {
  color: #333;
  font-size: 24px;
}

h2 {
  color: #555;
  font-size: 20px;
  margin-top: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 16px;
  color: #666;
  margin: 5px 0;
}

strong {
  color: #333;
}
</style>
