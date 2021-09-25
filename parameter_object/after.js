const station = {
  name: "ZB1",
  readings: [
    {
      temp: 47,
      time: "2016-11-10 09:10",
    },
    {
      temp: 53,
      time: "2016-11-10 09:20",
    },
    {
      temp: 58,
      time: "2016-11-10 09:30",
    },
    {
      temp: 53,
      time: "2016-11-10 09:40",
    },
    {
      temp: 51,
      time: "2016-11-10 09:50",
    },
  ],
};

const operatingPlan = {
  temperatureFloor: 49,
  temperatureCeiling: 53,
};

// 범위라는 개념을 하나의 클래스로 묶어 표현한다.
class NumberRange {
  constructor(min, max) {
    this._data = { min, max };
  }

  get min() {
    return this._data.min;
  }

  get max() {
    return this._data.max;
  }

  // 이렇게 range에서 추출할 수 있는 동작을 함수로 선언한다.
  contains(arg) {
    return this.min <= arg && arg <= this.max;
  }
}

const range = new NumberRange(
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);

function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => !range.contains(r.temp));
}

alerts = readingsOutsideRange(station, range);
