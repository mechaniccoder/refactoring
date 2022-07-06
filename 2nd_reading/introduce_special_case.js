class Site {
  get customer() {
    return this._customer === 'unknown' ? new UnknownCustomer() : this._customer;
  }
}

class Customer {
  get name() {}
  get billingPlan() {}
  set billingPlan(arg) {}
  get paymentHistory() {}

  get isUnknown() {return false;}
}

class UnknownCustomer {
  get isUnknown() {return true;}
  get name() {return 'unknown'}
  get billingPlan() {return registry.billingPlans.basic}
  set billingPlan(arg) {}
  get paymentHistory() {
    return new NullPaymentHistory()
  }
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {return 0}
}

// client1
const aCustomer = site.customer;
else customerName = aCustomer.name

// client2
const plan = aCustomer.paymentHistory.weeksDelinquentInLastYear

/**
 * 결국에는 다형성을 위한 장치가 있어야 클라이언트에서 구현에 의존하지 않을 수 있다.
 */