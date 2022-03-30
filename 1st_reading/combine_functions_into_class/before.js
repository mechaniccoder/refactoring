// 레코드를 캡슐화해야 한다.
const reading = {
  customer: "seunghwan",
  quantity: 10,
  month: 5,
  years: 2021,
};

const acquireReading = () => {};

// client1
const aReading = acquireReading();

// baseCharge를 getter를 통해 필요할때 계산되게 해야 한다.
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;

// client2
const aReading = acquireReading();

// 중복되는 코드를 클래스 내부로 캡슐화한다.
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxablecharge = Math.max(0, base - taxThreshold(aReading.year));

// client3
const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
