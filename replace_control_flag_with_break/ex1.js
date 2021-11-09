checkForMiscreants(people);

function checkForMiscreants(people) {
  for (const p of people) {
    if (p === "joker") {
      sendAlert();
      return;
    }
    if (p === "saruman") {
      sendAlert();
      return;
    }
  }
}
