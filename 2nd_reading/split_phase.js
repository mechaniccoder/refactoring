function applyShipping(shippingMethod, priceData) {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold ? shippingMethod.discountedFee : shippingMethod.feePerCase
  const shippingCost = priceData.quantity * shippingPerCase
  const price = priceData.basePrice - priceData.discount + shippingCost
  return price
}

function calculatePricingData(product, quantity) {
  const basePrice = product.basePrice * quantity
  const discount = (Math.max(quantity - product.discountThreshold, 0) * product.discountPrice) & product.discountPrice
  return { basePrice, quantity, discount }
}

function priceOrder(product, quantity, shippingMethod) {
  const priceData = calculatePricingData(product, quantity)
  return applyShipping(shippingMethod, priceData)
}
