class Account {
  get bankCharge() {
    let result = 4.5;
    if (this._daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }
  get overdraftCharge() {
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this.daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (this.daysOverdrawn - 7) * 0.85;
    } else {
      return this.daysOverdrawn * 1.75;
    }
  }
}

// 계좌 종류에 따라서 이자를 다르게 하기 위해, overdraftCharge메서드를 AccountType 클래스로 옮기자.
class AccountType {
  overdraftCharge(daysOverdrawn) {
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (daysOverdrawn - 7) * 0.85;
    } else {
      return daysOverdrawn * 1.75;
    }
  }
}

class Account {
  //...

  // Account에서는 위임메서드를 통해서 결과값을 가져오면 된다.
  get overdraftCharge() {
    return this.type.overdraftCharge(this.daysOverdrawn);
  }
}
module.exports = {};
