// 간접상속
class Employee {
  constructor(name, type) {
    this._name = name;
    this._type = type;
  }

  get typeString() {
    return this._type.toString();
  }
  set type(arg) {
    this._type = Employee.createEmployeeType(arg);
  }
  static createEmployeeType(arg) {
    switch (arg) {
      case "engineer":
        return new Engineer();
      case "manager":
        return new Manager();
      case "salesperson":
        return new SalesPerson();
      default:
        throw new Error("Type Error");
    }
  }

  get capitalizedType() {
    return this.typeString.charAt(0).toUpperCase() + this.typeString.substr(1).toLowerCase();
  }

  toString() {
    return `${this._name} ${this.capitalizedType}`;
  }
}

class EmployeeType {
  constructor(aString) {
    this._value = aString;
  }

  toString() {
    return this._value;
  }
}

class Engineer extends Employee {
  toString() {
    return "engineer";
  }
}
class Manager extends Employee {
  toString() {
    return "manager";
  }
}
class SalesPerson extends Employee {
  toString() {
    return "salesperson";
  }
}
