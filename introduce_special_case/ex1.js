class Site {
    constructor(data) {
        this._customer = data.customer;
    }
    get customer() {
        return (this._customer === '미확인 고객') ? new UnknownCustomer() : this._customer
    }
}

class Customer {
    get isUnknown() {return false};
    get name() {}
    get billingPlan() {}
    get billingPlan(arg) {}
    get paymentHistory() {}
}

class UnknownCustomer {
    get isUnKnown() {
        return true;
    }
    get name() {
        return '거주자'
    }
    get billingPlan() {
        return registry.billingPlans.basic;
    }
    set billingPlan() {}
    get paymentHistory() {
        return new NullPaymentHistory()
    }
}

class NullPaymentHistory {
    get weeksDelinquentInLastYear() {
        return 0;
    }
}

// client1
const aCustomer = site.customer;
const customerName = aCustomer.name;

// client2
const plan = (isUnknown(aCustomer)) ? registry.billingPlans.basic : aCustomer.billingPlan

// client3
if (isUnknown(aCustomer)) aCustomer.billingPlan = newPlan;

//clinet4
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;

// 튀는 client
const name = aCustomer.isUnKnown ? '미확인 거주자' : aCustomer.name;

function isUnknown(arg) {
    if (!(arg instanceof Customer || arg instanceof UnknownCustomer)) {
        throw new Error('잘못된 값')
    }
    return arg.isUnKnown; 
}