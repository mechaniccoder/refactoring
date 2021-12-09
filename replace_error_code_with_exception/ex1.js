function localShippingRules(country) {
  const data = countryData.shippingRules[country];
  if (data) return new ShippingRules(data);
  else throw OrderProcessingError(-23);
}

function calculateShippingCosts(anOrder) {
  const shippingRules = localShippingRules(anOrder.country);
  if (shippingRules < 0) throw new Error("오류 존재");
}

// 호출차

let status;
try {
  status = calculateShippingCosts(orderData);
} catch (e) {
  if (e instanceof OrderProcessingError) {
    errorList.push({ order: OrderData, errorCode: e.code });
  } else {
    throw e;
  }
}
if (status < 0) errorList.push({ order: orderData, errorCode: status });

class OrderProcessingError extends Error {
  constructor(errorCode) {
    super(`주문 처리 오류 ${errorCode}`);
    this.code = errorCode;
  }

  get name() {
    return OrderProcessingError.name;
  }
}
