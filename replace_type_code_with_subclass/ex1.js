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

class Enginneer extends Employee {
  get type() {
    return "engineer";
  }
}

function createEmplyee(name, type) {
  return new Employee(name, type);
}
