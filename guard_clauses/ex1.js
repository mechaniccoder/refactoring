function payAmount(employee) {
  let result;
  if (employee.isSparated) {
    result = { amount: 0, reasonCode: "sep" };
  } else if (employee.isRetired) {
    result = { amount: 0, reasonCode: "ret" };
  } else {
    result = someLogic();
  }
  return result;
}

// 이렇게 보호구문을 추가하고, 가변 변수를 제거해주자!
function payAmount(employee) {
  if (employee.isSparated) return { amount: 0, reasonCode: "sep" };
  if (employee.isRetired) return { amount: 0, reasonCode: "ret" };
  return someLogic();
}

/**
 * 조건식을 반대로 만드는 경우
 */
function adjestedCapital(anInstrument) {
  let result = 0;
  if (anInstrument.capital > 0) {
    if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
      result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
    }
  }
  return result;
}

function adjestedCapital(anInstrument) {
  let result = 0;
  if (anInstrument.capital <= 0) return result;
  if (anInstrument.interestRate <= 0 || anInstrument.duration <= 0) return result;
  result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
  return result;
}

function adjestedCapital(anInstrument) {
  if (anInstrument.capital <= 0 || anInstrument.interestRate <= 0 || anInstrument.duration <= 0) return 0;
  return (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
}

/**
 * 비정상 종료인 경우네는 앞에 보호구문으로 함수를 빠져나오고
 * 둘 다 정상인 경우에는 if, else를 적어 중요성을 전달한다.
 */
