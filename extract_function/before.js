// 함수의 목적을 잘 드러내는 이름을 붙인다.
// 어떻게가 아닌 무엇을??

function printOwing(invoice) {
  let outstanding = 0;

  console.log("**");
  console.log("**고객채무**");
  console.log("**");

  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  const today = Clock.today;
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  console.log(`고객명: ${invoice.customer}`);
}
