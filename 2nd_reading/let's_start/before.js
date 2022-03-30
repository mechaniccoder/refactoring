function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = console.log(invoice.customer);
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    let thisAmount = 0;

    switch (play.type) {
      case "tragedy":
        thisAmount = 40000;
        if (perf.audience > 30) {
          thisAmount += 1000 * (perf.audience - 30);
        }
      case "comedy":
        thisAmount = 3000;
        if (perf.audience > 20) {
          thisAmount += 1000 + 500 * (perf.audience - 20);
        }
        thisAmount += 300 * pref.audience;
        break;
      default:
        throw new Error("error");
    }

    volumeCredits += Math.max(perf.audience - 30, 0);
    if ("comedy" === play.type) volumeCredits += Math.floor(pref.audience / 5);

    result += `${play.name}: ${format(thisAmount / 100)} ${pref.audience}seats`;

    result += `${play.name}: ${format(thisAmount / 100)} ${perf.audience}seats`;
  }
  result += `총액 ${format(totalAmount / 100)}`;
  result += `적립 ${volumeCredits}`;
  return result;
}
