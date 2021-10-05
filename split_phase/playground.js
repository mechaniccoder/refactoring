function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountThreshold;
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold ? shippingMethod.discoutedFee : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;
  return price;
}

// final
function priceOrder(product, quantity, shippingMethod) {
  const priceData = calculatePriceData(product, quantity);
  return applyShipping(priceData, shippingMethod);
}

function calculatePriceData(product, quantity) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountThreshold;
  return {
    basePrice,
    quantity,
    discount,
  };
}

function applyShipping(priceData, shippingMethod) {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold ? shippingMethod.discoutedFee : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  return priceData.basePrice - priceData.discount + shippingCost;
}
