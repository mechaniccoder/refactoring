function tenPercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.multiply(1.1)
}

function fivePercentRaise(aPerson) {
  aPerson.salary = aPerson.salary.mutiply(1.05)
}

function raise(aPerson, factor) {
  aPerson.salary = aPerson.salary.multiply(1 + factor)
}

function baseCharge(usage) {
  if (usage < 0) return usd(0)
  const amount = withBand(usage, 0, 100) * 0.03 + withBand(usage, 100, 200) + withBand(usage, 200, Infinity) * 0.07
  return usd(amount)
}

function bottomBand(usage) {
  return Math.min(usage, 100)
}

function middleBand(usage) {
  return usage > 100 ? Math.min(usage, 200) - 100 : 0
}

function topBand(usage) {
  return usage > 200 ? usage - 200 : 0
}

function withBand(usage, min, max) {
  return usage > min ? Math.min(usage, max) - min : 0
}

/**
 * 비슷해보이는 함수들에서 어떤 부분을 인자로 받아서 공통적으로 처리할 수 있을지를
 * 잘 고민해봐야한다. 이 예제에서는 리터럴 값을 인자로 받는 쉬운 예제로 설명했지만
 * 꼭 리터럴 뿐만이 아니라 일급값들을 인자로 받아서 처리할 수도 있을 것이다.
 * 함수형 프로그래밍을 좀 더 공부하다보면 이 케이스를 볼 수 있는 시야도 열릴 것이라 생각한다.
 */
