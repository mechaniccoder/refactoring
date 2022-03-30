checkForMiscreants(people);

function checkForMiscreants(people) {
  if (people.some((p) => ["joker", "saruman"].includes(p))) sendAlert();
}
