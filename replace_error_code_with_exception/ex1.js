function localShippingRules(country) {
  const data = countryData.shippingRules[country];
  if (data) return new ShippingRules(data);
  else return -23;
}

function calculateShippingCosts(anOrder) {
  const shippingRules = localShippingRules(anOrder.country);
  if (shippingRules < 0) return shippingRules;
}

// 호출차

let status;
try {
  status = calculateShippingCosts(orderData);
} catch (e) {
  throw e;
}
if (status < 0) errorList.push({ order: orderData, errorCode: status });
