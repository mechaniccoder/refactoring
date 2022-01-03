// 간접상속
class Employee {
  constructor(name, type) {
    this.validate(name, type);
    this._name = name;
    this._type = type;
  }

  get type() {
    return this._type;
  }
  set type(arg) {
    this._type = arg;
  }

  get capitalizedType() {
    return this._type.charAt(0).toUpperCase() + this._type.substr(1).toLowerCase();
  }

  toString() {
    return `${this._name} ${this.capitalizedType}`;
  }

  validate(arg) {
    if (!["engineer", "manager", "salesperson"].includes(arg)) {
      throw new Error("TypeError");
    }
  }
}
