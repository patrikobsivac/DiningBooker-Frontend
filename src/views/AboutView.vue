<template>
  <div class="about">
    <h1>O DiningBooker-u</h1>
    <div id="description-container">
      **DiningBooker** je jedinstvena usluga za brzu i jednostavnu rezervaciju
      stolova u gradskim restoranima. Naša je misija učiniti vaše iskustvo
      traženja pravog objekta za obiteljsku večeru, poslovni sastanak ili večer
      u gradu jednostavnom i laganom vježbom. Zahvaljujući **DiningBooker** -
      novoj aplikaciji, možete si pronaći slobodne termine, odabrati restorane
      koji vam se najviše sviđaju i rezervirati svoj stol u nekoliko klikova.
      DiningBooker će Vas voditi do najboljeg za sve kojima je stalo do
      restorana s dobrim pogledom na more, ugodan ambijent za dvoje ili restoran
      s bogatom ponudom jelovnika. Pitanje s U međuvremenu, naš sustav
      obavijesti nikada neće dopustiti da propustite svoju rezervaciju, a naš
      tim za korisnike uvijek je dostupan za odgovore na vaša pitanja.
    </div>
  </div>
</template>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  text-align: center;
}

.about {
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5em;
  color: #0056b3;
  font-weight: bold;
}

#description-container {
  font-size: 1.2em;
  color: #555;
  margin-top: 20px;
  line-height: 1.6;
  text-align: justify;
}

#description-container em {
  font-style: italic;
  color: #007bff;
}
</style>

<script>
export default {
  name: 'About',
};
</script>
