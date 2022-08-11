/**
 * 대부분의 프로그래밍, 디자인패턴 책에서 말하듯이 상속보다는 합성을 사용하라고 한다.
 * 상속을 사용할 경우에 자식 클래스가 부모에 의존하게 돼서 부모를 변경할때 그 변경의 여파가
 * 자식까지 흐르기때문이다. 객체지향 책에서는 상속은 컴파일 타임에 의존성이 결정되기 때문에
 * 동적바인딩을 할 수가 없다는 단점도 가지고 있다.
 *
 * 하지만 이 책의 저자는 무조건 상속을 사용하지 말라고는 하지 않는다. 그 대신에 상속과 합성을
 * 적절하게 사용하라고 권장하고 있다.
 */
class Booking {
  constructor(show, date, extras) {
    this._show = show
    this._date = date
    this._extras = extras
  }

  hasTalkback() {
    return this._show.hasOwnProperty('talkback') && !this.isPeakDay
  }

  get basePrice() {
    let result = this._show.price
    if (this.isPeakDay) result += Math.round(result * 0.15)
    return this._premiumDelegate ? this._premiumDelegate.extendBasePrice(result) : result
  }

  _bePremium(extras) {
    this._premiumDelegate = new PremiumBookingDelegate(this, extras)
  }

  get hasDinner() {
    return this._premiumDelegate ? this._premiumDelegate.hasDinner : undefined
  }
}

/**
 * @deprecated
 */
class PremiumBooking extends Booking {
  constructor(show, date, extras) {
    super(show, date)
    this._extras = extras
  }

  get basePrice() {
    return Math.round(super.basePrice + this._extras.premiumFee)
  }

  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this.isPeakDay
  }
}

function createBooking(show, date) {
  return new Booking(show, date)
}

function createPremiumBooking(show, date, extras) {
  const result = new Booking(show, date, extras)
  result._bePremium(extras)
  return result
}

aBooking = createBooking(show, date)
aBooking = createPremiumBooking(show, date, extras)

class PremiumBookingDelegate {
  constructor(hostBooking, extras) {
    this._host = hostBooking
    this._extras = extras
  }

  get hasTalkback() {
    return this._host._show.hasOwnProperty('talkback')
  }

  extendBasePrice(base) {
    return Math.round(base + this._extras.premiumFee)
  }

  get hasDinner() {
    return this._extras.hasOwnProperty('dinner') && !this.isPeakDay
  }
}
