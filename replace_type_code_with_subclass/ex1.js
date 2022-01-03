class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  get type() {
    return this._type;
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
      return new Engineer(name, type);
    case "manager":
      return new Manager(name, type);
    case "salesperson":
      return new SalesPerson(name, type);
  }
  return new Employee(name, type);
}
