class Henkilo {
  constructor(firstNames, lastName, callSign, birthYear) {
    this.firstNames = firstNames
    this.lastName = lastName
    this.callSign = callSign
    this.birthYear = birthYear
  }

  getFullName() {
    return this.firstNames + ' ' + this.lastName
  }
  getBirthYear() {
    return this.birthYear
  }
}

module.exports = Henkilo
