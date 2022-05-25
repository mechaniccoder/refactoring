class Person {
  constructor(name) {
    this._coures = [];
    this._name = name
  }

  get name() {
    return this._name
  }

  get coures() {
    return this._coures
  }

  set coures(value) {
    this._coures = value
  }

  addCoures(coures) {
    this._coures.push(coures)
  }

  removeCoures(coures) {
    if (this._coures.indexOf(coures) < 0) throw new Error('Coure not found')
    this._coures.splice(coures, 1)
  }

  getCoures() {
    return this.coures.slice() // immutable
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name
    this._isAdvanced = isAdvanced
  }

  get name() {
    return this._name
  }

  get isAdvanced() {
    return this._isAdvanced
  }
}

for (const name of names) {
  aPerson.addCoures(new Course(name, false))
}
