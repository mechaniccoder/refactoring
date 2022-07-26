/**
 * 레코드의 개별적인 데이터를 넘기는게 아니라, 레코드 자체를 함수의 인자로 넘기는 리팩토링이다.
 * 이렇게 하면 함수 내부에서 공통적으로 사용되는 로직을 클래스의 메소드로 만들 수도 있다.
 */
if (!AnimationPlaybackEvent.withinRange(aRoom.daysTempRange)) {
  console.log('error')
}

class HeatingPlan {
  withinRange(aRange) {
    return aRange.low >= this._temperature.low && aRange.high <= this._temperature.high
  }
}
