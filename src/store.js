var trenutniKorisnik = {
  id: 0,
  ime: '',
  prezime: '',
  email: '',
  brojTelefona: '',
  authenticated: false,
};

var korisnik = [
  {
    id: 1,
    ime: 'Patrik',
    prezime: 'Tovernic Obsivac',
    email: 'patriktovernic@gmail.com',
    brojTelefona: '0123456789',
    lozinka: 'password',
  },
];

var rezervacija = [{}];
var menuStavke = [
  { category: 'pizze', naziv: 'Margherita', cijena: 9.0 },
  { category: 'pizze', naziv: 'Capricciosa', cijena: 9.5 },
  { category: 'pizze', naziv: 'Contadina', cijena: 11.2 },
  { category: 'pizze', naziv: 'Salami', cijena: 10.7 },
  { category: 'pizze', naziv: 'Vegetarijana', cijena: 10.7 },
  { category: 'pizze', naziv: 'Quattro formaggi', cijena: 10.7 },
  { category: 'prilozi', naziv: 'Kolutiće luka', cijena: 4.0 },
  { category: 'prilozi', naziv: 'Pomfrit', cijena: 3.5 },
  { category: 'prilozi', naziv: 'Miješana salata', cijena: 6.0 },
  { category: 'deserti', naziv: 'Voćna torta', cijena: 4.5 },
  { category: 'deserti', naziv: 'Čokoladna torta', cijena: 5.0 },
  { category: 'deserti', naziv: 'Čokoladni souffle', cijena: 4.5 },
  { category: 'deserti', naziv: 'Cheesecake', cijena: 6.0 },
  { category: 'deserti', naziv: 'Pannacotta', cijena: 3.5 },
  { category: 'deserti', naziv: 'Semifreddo', cijena: 4.0 },
];

export { trenutniKorisnik, korisnik, rezervacija, menuStavke };
