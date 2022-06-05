class Order {
  constructor(quantity, item) {
    this.quantity = quantity
    this.item = item
  }

  get Price() {
    return this.basePrice() * discountFactor
  }

  get discountFactor() {
    let dicountFactor = 0.98
    if (this.basePrice > 1000) dicountFactor -= 0.03
    return dicountFactor
  }

  get basePrice() {
    return this.quantity * this.item.price
  }

}