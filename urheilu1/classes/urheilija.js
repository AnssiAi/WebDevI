const Henkilo = require('./henkilo.js')

class Urheilija extends Henkilo {
  constructor(
    firstNames,
    lastName,
    callSign,
    birthYear,
    imgLink,
    weight,
    sport,
    awards
  ) {
    super(firstNames, lastName, callSign, birthYear)
    this.imgLink = imgLink
    this.weight = weight
    this.sport = sport
    this.awards = awards
  }
  getName() {
    return super.getFullName()
  }

  getAwards() {
    return this.awards
  }

  setAwards(award) {
    this.awards = this.awards.concat(award)
  }
}

module.exports = Urheilija
