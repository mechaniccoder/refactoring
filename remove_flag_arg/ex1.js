aShipment.deliveryDate = deliveryDate(anOrder, true);
// or
aShipment.deliveryDate = deliveryDate(anOrder, false);

function deliveryDate(anOrder, isRush) {
  if (isRush) {
    let deliveryTime;
    if (["ma", "ct"].includes(anOrder.deliveryState)) deliveryTime = 1;
    else if (["ny", "nh"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  } else {
    let deliveryTime;
    if (["ma", "ct"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else if (["ny", "nh"].includes(anOrder.deliveryState)) deliveryTime = 3;
    else deliveryTime = 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}
