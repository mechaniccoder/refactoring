const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.withinRange(tempRange);
if (!isWithinRange) {
}

class HeatingPlan {
  withinRange(tempRange) {
    return tempRange.low <= this._temperature && tempRange.high >= this._temperature;
  }
}
