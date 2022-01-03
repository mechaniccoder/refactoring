class Employee {
  constructor(name) {
    this._name = name;
  }

  validateType(arg) {
    if (!["engineer", "manager", "salesperson"].includes(arg)) {
      throw new Error("TypeError");
    }
  }

  toString() {
    return `${this._name} ${this.type}`;
  }
}

class Engineer extends Employee {
  get type() {
    return "engineer";
  }
}

class Manager extends Employee {
  get type() {
    return "manager";
  }
}

class SalesPerson extends Employee {
  get type() {
    return "salesperson";
  }
}

function createEmplyee(name, type) {
  switch (type) {
    case "engineer":
      return new Engineer(name);
    case "manager":
      return new Manager(name);
    case "salesperson":
      return new SalesPerson(name);
    default:
      throw new Error("TypeError");
  }
}
