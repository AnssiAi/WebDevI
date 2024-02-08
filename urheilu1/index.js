const Urheilija = require('./classes/urheilija.js')

const sport1 = new Urheilija(
  'Oleksander',
  'Usyk',
  'Cat',
  new Date(1987, 1, 17),
  'https://commons.wikimedia.org/wiki/File:Oleksandr_Usyk_training_-_20150409_-_24_(cut).jpg',
  '91 kg',
  'Nykkeily',
  [
    '2022. WBO-mestari, alempi raskas sarja',
    '2012. Raskaansarjan kulta Lontoon kesäolympialaisissa',
  ]
)

const name = sport1.getName()
let awards = sport1.getAwards()
console.log(name)
awards.forEach(award => {
  console.log(award)
})

sport1.setAwards('Toimiiko tää?')
awards = sport1.getAwards()
console.log('Päivitetty saavutukset')
awards.forEach(award => {
  console.log(award)
})
