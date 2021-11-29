const tempRange = aRoom.daysTempRange;
const isWithinRange = xxWithinRange(aPlan, tempRange);
if (!isWithinRange) {
}

function xxWithinRange(aPlan, tempRange) {
  const low = tempRange.low;
  const high = tempRange.high;
  const isWithinRange = aPlan.withinRange(low, high);
  return isWithinRange;
}
