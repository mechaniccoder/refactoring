const assert = require('assert')
const reading = {
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2019,
}

// client1
const rawReading = acquireReading()
const baseCharge = enrichReading(rawReading).baseCharge

// clinet2
const rawReading = acquireReading()
const taxableCharge = enrichReading(rawReading).taxableCharge

// client3
const rawReading = acquireReading()
const basicChargeAmount = enrichReading(rawReading).baseCharge

function enrichReading(original) {
  const result = _.cloneDeep(original)
  result.baseCharge = calculateBasicCharge(result)
  result.taxableCharge = Math.max(0, result.baseCharge - taxableThreshold(result.year))
  return result

  function calculateBasicCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity
  }
}

function acquireReading() {
  return new Reading(reading)
}

class Reading {
  constructor() {
    this.customer = 'ivan'
    this.quantity = 10
    this.month = 5
    this.year = 2019
  }

  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxableThreshold(this.year))
  }
}

module.exports = {}
