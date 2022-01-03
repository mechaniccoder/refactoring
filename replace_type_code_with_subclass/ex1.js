class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  validateType(arg) {
    if (!["engineer", "manager", "salesperson"].includes(arg)) {
      throw new Error("TypeError");
    }
  }

  toString() {
    return `${this._name} ${this._type}`;
  }
}
