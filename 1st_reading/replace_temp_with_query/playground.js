/**
 * 임시 변수에 대해서 아예 함수로 만들어 버리는 리팩토링 기법이다.
 */

let result = 215;

result;
class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    // 여기서의 임시 변수 basePrice, discountFactor에 대해 리팩토링을 해보자.
    let basePrice = this._quantity * this._item.price;
    let discountFactor = 0.98;

    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }
}

// 먼저, 임시 변수를 immutable하게 const를 사용하자.
class Order {
  // ...
  get price() {
    const basePrice = this.quantity * this._item.price;
    let discountFactor = 0.98;
    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }
}

// 대입문의 우변을 getter로 추출한다.
class Order {
  // ...
  get basePrice() {
    this.quantity * this._item.price;
  }
  get price() {
    const basePrice = this.basePrice;
    let discountFactor = 0.98;
    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }
}

// 변수를 인라인해주자.
class Order {
  // ...
  get basePrice() {
    this.quantity * this._item.price;
  }
  get price() {
    let discountFactor = 0.98;
    if (this.basePrice > 1000) discountFactor -= 0.03;
    return this.basePrice * discountFactor;
  }
}

// discountFactor도 같은 방식으로 처리하자.
class Order {
  // ...
  get basePrice() {
    this.quantity * this._item.price;
  }
  get discountFactor() {
    let discountFactor = 0.98;
    if (this.basePrice > 1000) discountFactor -= 0.03;
    return discountFactor;
  }
  get price() {
    return this.basePrice * this.discountFactor;
  }
}

let result = 215;
result;

module.exports = {};
