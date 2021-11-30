class HeatingPlan {
  targetTemp(selectedTemp) {
    if (selectedTemp > this._max) return this._max;
    else if (selectedTemp < this._min) return this._min;
    else return selectedTemp;
  }
}

// client
if (thePlan.targetTemp(thermostat.selectedTemp) > thermostat.currentTemp) setToHeat();
else if (thePlan.targetTemp(thermostat.selectedTemp) < thermostat.currentTemp) setToCool();
else setOff();
