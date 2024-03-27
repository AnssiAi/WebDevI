import Henkilo from './henkilo.js'
class Urheilija extends Henkilo {
  //Konstruktoria pienennetty spread syntaksilla.
  constructor({ ...args }) {
    super(args.firstNames, args.lastName, args.callSign, args.birthYear)
    this.imgLink = args.imgLink
    this.weight = args.weight
    this.sport = args.sport
    this.awards = args.awards
  }
  getDetails() {
    const details = {
      name: super.getFullName(),
      birth: super.getBirthYear().toDateString(),
      weight: this.weight,
      sport: this.sport,
    }
    return details
  }

  getImg() {
    return this.imgLink
  }

  getAwards() {
    return this.awards
  }

  setAwards(award) {
    if (typeof award === 'string') {
      this.awards = this.awards.concat(award)
      return true
    }
    throw new Error('Annettu tieto oli väärää tyyppiä')
  }
}

export default Urheilija
