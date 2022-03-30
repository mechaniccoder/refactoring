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
const site = enrichSite(rawSite);
const aCustomer = site.customer;
const customerName = aCustomer.name;

function enrichSite(inputSite) {
  const result = _.cloneDeep(inputSite);
  const unkownCustomer = {
      isUnknown = true,
      name: '거주자',
      billingPlan: registry.billingPlans.basic,
      paymentHistory: {
          weeksDelinquentInLastYear: 0
      }
  }

  if (isUnknown(result.customer)) result.customer = unkownCustomer;
  else result.customer.isUnknown = false;
  return result;
}

function isUnknown(aCustomer) {
  return aCustomer.isUnknown;
}

// clinet2
const plan = aCustomer.billingPlan

// client3
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;

module.exports = {};
