checkForMiscreants(people);

function checkForMiscreants(people) {
  let found = false;
  for (const p of people) {
    if (!found) {
      if (p === "joker") {
        sendAlert();
        found = true;
      }
      if (p === "saruman") {
        sendAlert();
        found = true;
      }
    }
  }
}
