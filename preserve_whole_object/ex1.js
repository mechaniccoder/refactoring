if (!aPlan.xxWithinRange(aRoom.daysTempRange)) {
  alerts.push("온도가 벗어났습니다.");
}

class HeatingPlan {
  withinRange(bottom, top) {
    return bottom >= this._temperature.low && top <= this._temperature.high;
  }
  xxWithinRange(aNumberRange) {
    return this.withinRange(aNumberRange.low, aNumberRange.high);
  }
}
