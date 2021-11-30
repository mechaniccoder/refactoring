class HeatingPlan {
  get targetTemp() {
    this.newTargetTemp(thermostat.selectedTemp);
  }

  newTargetTemp(selectedTemp) {
    if (selectedTemp > this._max) return this._max;
    else if (selectedTemp < this._min) return this._min;
    else return selectedTemp;
  }
}

// client
if (thePlan.newTargetTemp(thermostat.selectedTemp) > thermostat.currentTemp) setToHeat();
else if (thePlan.newTargetTemp(thermostat.selectedTemp) < thermostat.currentTemp) setToCool();
else setOff();
