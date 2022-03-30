function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace,
  };

  function calculateDistance() {
    let result = 0;
    for (let i = 0; i < points.length; i++) {
      result += distance(points[i - 1], points[i]);
    }
    return result;
  }

  function distance(p1, p2) {}
  function radians(degrees) {}
  function calculateTime() {}
}

// calculateDistance를 최상위로 옮겨보자.
function top_calculateDistance(points) {
  let result = 0;
  for (let i = 0; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}

// disatnce와 radians의 경우 trackSummary라는 최상위 함수 컨텍스트에 있는 어떤 것도
// 사용하지 않기 때문에 차라리 calculateDistacne함수 안으로 옮긴다.
function top_calculateDistance(points) {
  let result = 0;
  for (let i = 0; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;

  function distance(p1, p2) {}
  function radians(degrees) {}
}

// 원본함수에서 복사한 함수를 호출하자.
function trackSummary(points) {
  const totalTime = calculateTime();
  const totalDistance = calculateDistance();
  const pace = totalTime / 60 / totalDistance;
  return {
    time: totalTime,
    distance: totalDistance,
    pace,
  };

  function calculateDistance() {
    top_calculateDistance(points);
  }

  function calculateTime() {}
}

// 교체해주자. totalDistance로 이름을 바꾸고 변수를 인라인 해주자.
function trackSummary(points) {
  const totalTime = calculateTime();
  const pace = totalTime / 60 / totalDisatnce(points);
  return {
    time: totalTime,
    distance: totalDisatnce(points),
    pace,
  };

  function calculateTime() {}
}

// distance나 radians은 top_calculateDisatnce의 함수에 의존하고 있지 않으므로,
// 마찬가지로 최상위 함수로 옮긴다.
// 중첩함수는 데이터에 대한 결합과 의존성이 생기므로 되도록이면 피하자!
function trackSummary() {}
function totalDisatnce() {}
function distance() {}
function radians() {}
