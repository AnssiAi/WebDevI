const Urheilija = require('./classes/urheilija.js')

//Lähetetään objektina, jotta Urheilija konstruktori on vähemmän raskas
const sport1 = new Urheilija({
  firstNames: 'Oleksander',
  lastName: 'Usyk',
  callSign: 'Cat',
  birthYear: new Date('1987-01-17'),
  imgLink:
    'https://commons.wikimedia.org/wiki/File:Oleksandr_Usyk_training_-_20150409_-_24_(cut).jpg',
  weight: '91 kg',
  sport: 'Nykkeily',
  awards: [
    '2022. WBO-mestari, alempi raskas sarja',
    '2012. Raskaansarjan kulta Lontoon kesäolympialaisissa',
  ],
})

//Destrukturoidaan objekti muuttujiksi
const { name, birth, weight, sport } = sport1.getDetails()
let awards = sport1.getAwards()

console.log('Urheilija:')
console.log(`\t ${name}`)
console.log(`\t ${birth}`)
console.log(`\t ${weight}`)
console.log(`\t ${sport}`)
console.log(`Valokuva: ${sport1.getImg()}`)
console.log('Saavutukset:')
awards.forEach(award => {
  console.log(`\t ${award}`)
})

console.log('Päivitetty saavutukset:')
try {
  sport1.setAwards('Tämä on päivitys')
  awards = sport1.getAwards()
  awards.forEach(award => {
    console.log(`\t ${award}`)
  })
} catch (e) {
  console.log(e)
}
//Keskeytyykö ohjelman suoritus?
console.log('Ohjelma loppu')
