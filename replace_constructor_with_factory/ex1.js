class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }

  get name() {
    return this._name;
  }
  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return {
      E: "Engineer",
      M: "Manager",
      S: "Salesperson",
    };
  }
}

// client1
candidate = createEngineer(document.name, document.empType);

// client2
const leadEngineer = createEngineer(document.leadEngineer, "E");

function createEngineer(name) {
  return new Employee(name, "E");
}
