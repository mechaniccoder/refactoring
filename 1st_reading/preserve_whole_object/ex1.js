if (!aPlan.xxWithinRange(aRoom.daysTempRange)) {
  alerts.push("온도가 벗어났습니다.");
}

class HeatingPlan {
  withinRange(aNumberRange) {
    return aNumberRange.low >= this._temperature.low && aNumberRange.high <= this._temperature.high;
  }
}
