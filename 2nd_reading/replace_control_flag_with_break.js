for (const p of people) {
    if (p === 'joker') {
      sendAlert();
      return;
    }

    if (p === 'sarooman') {
      sendAlert();
      return;
  }
}

function checkForMiscreants(people) {
  if (people.some(p => ['sarooman', 'joker'].includes((p)))) {
    sendAlert();
  }
}
