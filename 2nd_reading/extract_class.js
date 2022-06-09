class Person {
  constructor(telephoneNumber) {
    this._telephoneNumber = telephoneNumber
  }

  get name() {
    return this._name
  }

  set name(arg) {
    this._name = arg;
  }

  get telephoneNumber() {
    return this._telephoneNumber.telephoneNumber
  }

  set officeAreaCode(arg) {
    this._telephoneNumber.areaCode = arg;
  }

  get officeNumber() {
    return this._telephoneNumber._officeNumber
  }

  set OfficeNumber(arg) {
    this._telephoneNumber._officeNumber = arg;
  }

}

class TelephoneNumber {
  get areaCode() {
    return this._areaCode
  }

  set areaCode(arg) {
    this.areaCode = arg;
  }

  get number() {
    return this.number
  }

  set number(arg) {
    this.number = arg;
  }
}

new Person(new TelephoneNumber())

