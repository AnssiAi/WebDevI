const element = document.querySelector('#content')

//Täällä luodaan kortit projekteille ja tehtäville

//Itsanat
const wordGame = document.createElement('div')
wordGame.innerHTML = `
    <div class="card mb-3 mt-3">
    <div class="row g-0">
        <div class="col-md-4 bg-blue">
        <img src="./assets/itord.jpg" class="card-img-top" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">IT-sanasto peli</h5>
            <p class="card-text">Pelissä etsitään suomen ja ruotsinkielisiä sanapareja it-sanastosta.</p>
            <p class="card-text">Tein pelin helpottaakseni ruotsin sanaston opiskelua. On olemassa paljon hyviä sovelluksia kielen opiskeluun, mutta kaipasin it-sanastoon keskittynyttä peliä.</p>
            <p class="card-text">Tekniikat: JavaScript, NodeJs, Express</p>
            <p class="card-text">Sivuston lataaminen saattaa kestää minuutin palvelun käynnistyessä.</p>
            <a href="https://itordapp.onrender.com" class="btn btn-custom btn-md">Siirry sivulle</a>
        </div>
        </div>
        </div>
    </div>
`
//Bloodmoon
const bloodMoon = document.createElement('div')
bloodMoon.innerHTML = `
    <div class="card mb-3 mt-3">
    <div class="row g-0">
        <div class="col-md-4 bg-black">
        <img src="./assets/pexels-sargaraj-tr-18966007.jpg" class="card-img-top" alt="Bloodmoonkuva">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">Verkkokauppaluonnos Bloodmoon pelille</h5>
            <p class="card-text">Web-ja mobiilikäyttöliittymät opintojakson kurssityö.</p>
            <p class="card-text">Olen suunnitellut omaa pöytäroolipeliä jonkin aikaa ja tämä harjoitus oli hyvä mahdollisuus luonnostella pelille sivusto. Sivusto esittelee pelin ja kokoaa yhteen paikkaan kaiken pelaamisen aloittamiseen tarvittavan materiaalin.</p>
            <p class="card-text">Tekniikat: JavaScript, Bootstrap, NodeJs, Express</p>
            <p class="card-text">Sivuston lataaminen saattaa kestää minuutin palvelun käynnistyessä.</p>
            <a href="https://bloodmoongame.onrender.com/" class="btn btn-custom btn-md">Siirry sivulle</a>
        </div>
        </div>
    </div>
    </div>
`
//Breakout
const breakout = document.createElement('div')
breakout.innerHTML = `
    <div class="card mb-3 mt-3">
    <div class="row g-0">
        <div class="col-md-4 bg-canvas">
        <img src="./assets/breakout.jpg" class="card-img-top" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">Breakout-peli</h5>
            <p class="card-text">Canvas-komponentin harjoitteluun tehty peli.</p>
            <p class="card-text">Pelin tekeminen oli hyvä harjoitus grafiikan piirtämisestä verkkosivustolle.</p>
            <p class="card-text">Tekniikat: JavaScript</p>
            <a href="./breakout/game.html" class="btn btn-custom btn-md">Siirry sivulle</a>
        </div>
        </div>
        </div>
    </div>
`
//Puhelinluettelo
const phoneBook = document.createElement('div')
phoneBook.innerHTML = `
    <div class="card mb-3 mt-3">
    <div class="row g-0">
        <div class="col-md-4 bg-smoke">
        <img src="./assets/Phonebook.jpg" class="card-img-top" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">Puhelinluettelo</h5>
            <p class="card-text">JQuerya hyödyntävä puhelinluettelosovellus.</p>
            <p class="card-text">Puhelinluettelo on harjoitus tietojen noutamiseen palvelimelta hyödyntäen JQuerya. Hakuosassa noudettua tietoa käsitellään oikean henkilön etsimiseksi.</p>
            <p class="card-text">Tekniikat: JavaScript, JQuery</p>
            <a href="./phonebook/book.html" class="btn btn-custom btn-md">Siirry sivulle</a>
        </div>
        </div>
        </div>
    </div>
`

//Palaute
const feedback = document.createElement('div')
feedback.innerHTML = `
    <div class="card mb-3 mt-3">
    <div class="row g-0">
        <div class="col-md-4 bg-blue">
        <img src="./assets/feedback.jpg" class="card-img-top" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">Palaute</h5>
            <p class="card-text">Opintojakson palauteosio.</p>
            <a href="./feedback/feedback.html" class="btn btn-custom btn-md">Siirry sivulle</a>
        </div>
        </div>
        </div>
    </div>
`

element.append(wordGame)
element.append(bloodMoon)
element.append(breakout)
element.append(phoneBook)
element.append(feedback)
