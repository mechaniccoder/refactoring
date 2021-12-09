function localShippingRules(country) {
  const data = countryData.shippingRules[country];
  if (data) return new ShippingRules(data);
  else throw OrderProcessingError(-23);
}

function calculateShippingCosts(anOrder) {
  const shippingRules = localShippingRules(anOrder.country);
}

// 호출차

try {
  calculateShippingCosts(orderData);
} catch (e) {
  if (e instanceof OrderProcessingError) {
    errorList.push({ order: OrderData, errorCode: e.code });
  } else {
    throw e;
  }
}

class OrderProcessingError extends Error {
  constructor(errorCode) {
    super(`주문 처리 오류 ${errorCode}`);
    this.code = errorCode;
  }

  get name() {
    return OrderProcessingError.name;
  }
}
