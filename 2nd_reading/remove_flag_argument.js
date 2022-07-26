/**
 * 호출하는 쪽에서 로직을 선택하기 위해 인자로 넘기는 인수인데 true, false를 넘긴다는게(또는 리터럴) 도대체 무슨
 * 의미인건지를 파악하기 힘들다는 점에서 플래그 인수보다는 명시적으로 함수를 분리하는 것이 좋다고 생각한다.
 * 뭐, 물론 리팩토링 2판의 저자에게 많은 영향을 받아서 이렇게 생각하는거겠지만 나쁠건 없다고 본다.
 */
aShipment.deliveryDate = doOnRush(anOrder)
aShipment.deliveryDate = doOnNotRush(anOrder)

function deliveryDate(anOrder, isRush) {
  if (isRush) {
    doOnRush(anOrder)
  } else {
    doOnNotRush(anOrder)
  }
}

function doOnRush(anOrder) {}

function doOnNotRush(anOrder) {}

// 로직이 굉장히 복잡할 경우는 한번 래핑한 형태까지만 리팩토링을 할 수 있다.
function doOnRush(anOrder) {
  return deliveryDate(anOrder, true)
}

function doOnNotRush(anOrder) {
  return deliveryDate(anOrder, false)
}
