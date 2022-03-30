class Party {
  get annualCost() {
    return this.monthly * 12;
  }

  get monthlyCost() {
    throw new SubclassImlementationError();
  }
}

class Employee extends Party {}

class Department extends Party {}
