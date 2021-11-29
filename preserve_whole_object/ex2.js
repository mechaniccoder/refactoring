const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.xxWithinRange(tempRange);
if (!isWithinRange) {
}

class HeatingPlan {
  xxWithinRange(tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    const isWithinRange = this.withinRange(low, high);
    return isWithinRange;
  }
}
