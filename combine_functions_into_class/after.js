// 1. 먼저 레코드를 캡슐화해주자.
class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer;
  }

  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }
  // 2. calculateBaseCharge함수를 클래스 안으로 옮긴 뒤에, 함수 이름을 변경한다.
  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(aReading.year));
  }
}

// client3
const rawReading = acquireReading();
const aReading = new Reading(rawReading); // 데이터를 얻은 뒤에, 바로 객체를 만들어주자.
const basicChargeAmount = aReading.baseCharge;

// 위의 Reading클래스를 재사용해서 client1, client2에서 중복되는 코드를 제거한다.

// client1
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseCharge = aReading.baseCharge;

// client2
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = Math.max(
  0,
  aReading.baseCharge - taxThreshold(aReading.year)
);

// client2 - extract function
// 세금 계산 코드를 함수로 추출하자.
function taxableCharge(aReading) {
  return aReading.baseCharge - taxThreshold(aReading.year);
}

// client2
const taxableCharge = taxableCharge();

// taxableCharge도 클래스의 메서드로 추출하자.

// client2

const taxableCharge = aReading.taxableCharge;

/**
 *  getter를 활용해 필요한 시점에 계산해서 클라이언트에 데이터를 전달하도록 했는데,
 *  이것의 장점은 데이터가 갱신된다고 하더라도, 계산해서 데이터를 제공하기 때문에 안정적이다.
 * */
