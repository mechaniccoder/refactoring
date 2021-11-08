// ex1의 방법을 레코드에도 적용해보자.
const record = {
  name: "boston",
  location: "ma",
  customer: {
    name: "akme",
    billingPlan: "plan-451",
    paymentHistory: {
      weeksDelinquentInLastYear: 7,
    },
  },
};

const records1 = {
  name: " 물류창고",
  location: "ma",
  customer: "미확인 고객",
};

// client1
const rawSite = acquireSite();
const aCustomer = site.customer;
let customerName;
if (aCustomer === "미확인 고객") customerName = "거주자";
else customerName = aCustomer.name;

// clinet2
const plan = aCustomer === "미확인 고객" ? registry.billingPlans.basic : aCustomer.billingPlan;

// client3
const weeksDelinquent = aCustomer === "미확인 고객" ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
module.exports = {};
