class HeatingPlan {
  get targetTemp() {
    if (thermostat.selectedTemp > this._max) return this._max;
    else if (thermostat.selectedTemp < this._min) return this._min;
    else return thermostat.selectedTemp;
  }
}

// client
if (thePlan.targetTemp > thermostat.currentTemp) setToHeat();
else if (thePlan.targetTemp < thermostat.currentTemp) setToCool();
else setOff();
