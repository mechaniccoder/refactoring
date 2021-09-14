function printOwing(invoice) {
  printBanner();

  let outstanding = calculateOutstanding(invoice);

  recordDueDate(invoice);

  printDetail(invoice);

  function printBanner() {
    console.log("**");
    console.log("**고객채무**");
    console.log("**");
  }

  function calculateOutstanding(invoice) {
    let result = 0;
    for (const o of invoice.orders) {
      result += o.amount;
    }

    return result;
  }

  function printDetail(invoice) {
    console.log(`고객명: ${invoice.customer}`);
  }

  function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    );
  }
}
