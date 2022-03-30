// 객체를 복사하는 함수를 만든다.
function enrichReading(original) {
  const result = _.cloneDeep(original);
  return result;
}

// client3
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = calculateBaseCharge(aReading);

// baseCharge를 계산하는 로직을 담는다.
function enrichReading(original) {
  const result = _.cloneDeep(original);

  // 불변데이터이기 때문에 마음껏 변경해도 된다.
  result.baseCharge = calculateBaseCharge(result);
  return result;
}

// 이렇게 부가적인 정보를 사용할 수 있다.
const basicChargeAmount = aReading.baseCharge;

/**
 * 리팩토링을 해보자.
 */
const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const base = aReading.baseCharge;
const taxableCharge = aReading.taxableCharge;

function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    aReading.baseCharge - taxThreshold(aReading.year)
  );
  return result;
}

/**
 * transform함수는 도출되는 정보를 위한 함수의 중복을 막을 수 있다.
 * 즉, 추가적으로 도출되는 정보를 transform 함수에서 관리하여 한 곳에서 관리하기 위함이다.
 */
