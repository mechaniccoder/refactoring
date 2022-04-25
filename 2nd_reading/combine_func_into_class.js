const reading = {
  customer: 'ivan', quantity: 10, month: 5, year: 2017
}

const rawReading = acquireReading()
const aReading = new Reading(rawReading)
const baseCharge = aReading.baseCharge

function acquireReading() {
}

const rawReading = acquireReading()
const aReading = new Reading(rawReading)


const taxableCharge = aReading.taxableCharge

function acquireReading() {
}


class Reading {
  constructor(data) {
    this._customer = data.customer
    this._quantity = data.quantity
    this._month = data.month
    this._year = data.year
    this._data = data
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year))
  }

  get baseCharge() {
    return baseRate(this.month, this.year)
  }

  get data() {
    return this._data
  }

  get quantity() {
    return this._quantity
  }

  get month() {
    return this._month
  }

  get year() {
    return this._year
  }

  get customer() {
    return this._customer
  }
}
