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

// min, max와 같이 관련되어 있는 매개변수를 하나의 데이터 구조로 묶어서 넘겨준다.
// 이렇게 하면 이 데티어 구조를 활용하는 동작을 함수로도 추출할 수 있다.
function readingsOutsideRange(station, min, max) {
  return station.readings.filter((r) => r.temp < min || r.temp > max);
}

alerts = readingsOutsideRange(
  station,
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);
