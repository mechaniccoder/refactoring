/**
 * 이 리팩토링과 반대의 리팩토링 기법은 함수형 프로그래밍에서도 많이 사용된다.
 * 결국에 의존성을 함수 안에 둘 것이냐, 호출쪽에서 전달해줄 것이냐이다. 호출쪽에서 전달해주면
 * 모듈에 대한 함수를 순수함수로 만들 수 있기 때문에 테스트가 쉬워진다. 다만 호출하는 쪽의 코드가
 * 복잡해지기 때문에 적절한 시점에 균형점을 잘 옮기는 것이 중요하다고 저자는 말한다.
 * 최근에 리액트 진영에서도 이와 비슷한 것을 겪는다. 컴포넌트를 순수하게 만들기 위해서는 의존성을 부모에서
 * 받아서 처리해야한다. 그렇게 되면 컴포넌트를 순수함수로 만들 수 있기 때문에 테스트가 굉장히 쉽다.
 * 그러나 페이지단으로부터 의존성을 생성해서 최하단의 컴포넌트까지 전달하려면 props drilling이 심해지기 때문에
 * 적절한 타협점이 필요하다. 그래서 프런트엔드 testing 혹은 storybook에서는 이를 해결하기 위해 mocking 하는 쪽으로
 * 점점 더 발전해나가는 것 같다고 생각한다.
 */
class Order {
  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice
    return this.discountedPrice(basePrice)
  }

  discountedPrice(basePrice) {
    switch (this.discountLevel) {
      case 1:
        return basePrice * 0.95
      case 1:
        return basePrice * 0.9
    }
  }

  get discountLevel() {
    return this.quantity > 100 ? 2 : 1
  }
}
