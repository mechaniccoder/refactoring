function createEmployee(name, type) {
  return new Employee(name, type)
}

class Employee {
  constructor(name) {
    this.validateType(type)
    this._name = name
  }

  validateType(arg) {
    if (!['engineer', 'manager', 'salesperson'].includes(args)) {
      throw new Error(`${arg}라는 직원 유형은 없습니다.`)
    }
  }

  toString() {
    return `${this._name} ${this._type}`
  }

  get type() {
    return this._type
  }
}

class Engineer extends Employee {}

function createEmployee(name, type) {
  switch (type) {
    case 'engineer':
      return new Engineer(name)
    case 'salesperson':
      return new Salesperson(name)
    case 'manager':
      return new Manager(name)
  }

  return new Employee(name)
}

class Salesperson extends Employee {}

class Manager extends Employee {}
