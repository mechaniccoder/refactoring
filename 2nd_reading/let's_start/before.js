function statement(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer
  statementData.performances = invoice.performances.map(enrichPerformance)
  statementData.totalVolumeCredits = totalVolumeCredits(statementData)
  return renderPlainText(statementData, invoice, plays);

  function enrichPerformance(aPerformance) {
    const result = {...aPerformance}
    result.play = playFor(result)
    result.amount = amountFor(result)
    result.volumeCredits = volumeCreditsFor(result)
    return result
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }
  function amountFor(aPerformance) {
    let result = 0;
    switch (aPerformance.play.type) {
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
        result += 300 * perf.audience;
        break;
      default:
        throw new Error("error");
    }
    return result;
  }
  function volumeCreditsFor(aPerformance) {
    let volumeCredits = 0;
    volumeCredits += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === aPerformance.play.type) volumeCredits += Math.floor(perf.audience / 5);
    return volumeCredits;
  }
  function totalVolumeCredits(data) {
    return data.performances.reduce((total, perf) => total + perf.amount, 0)
  }
}

function renderPlainText(data, plays) {
  let result = console.log(data.customer);
  for (let perf of data.performances) {
    result += `${perf.play.name}: ${usd(perf.amount / 100)} ${perf.audience}seats`;

    result += `${perf.play.name}: ${usd(perf.amount / 100)} ${perf.audience}seats`;
  }
  result += `총액 ${usd(amountFor(perf) / 100)}`;
  result += `적립 ${data.totalVolumeCredits}`;

  return result;

  function usd(aNumber) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return format;
  }

}
