function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = console.log(invoice.customer);

  function volumeCreditsFor(aPerformance) {
    let volumeCredits = 0;
    volumeCredits += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === playFor(aPerformance).type) volumeCredits += Math.floor(pref.audience / 5);
    return volumeCredits;
  }

  for (let perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);

    result += `${playFor(perf).name}: ${usd(amountFor(perf) / 100)} ${pref.audience}seats`;

    result += `${playFor(perf).name}: ${usd(amountFor(perf) / 100)} ${perf.audience}seats`;
    totalAmount += amountFor(perf);
  }
  result += `총액 ${usd(totalAmount / 100)}`;
  result += `적립 ${volumeCredits}`;

  return result;

  function amountFor(aPerformance) {
    let result = 0;
    switch (playFor(aPerformance).type) {
      case "tragedy":
        result = 40000;
        if (aPerformance.audience > 30) {
          result += 1000 * (aPerformance.audience - 30);
        }
      case "comedy":
        result = 3000;
        if (aPerformance.audience > 20) {
          result += 1000 + 500 * (aPerformance.audience - 20);
        }
        result += 300 * pref.audience;
        break;
      default:
        throw new Error("error");
    }
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return format;
  }
}
