/**
 * 생성자를 팩토리 함수로 만드는 리팩토링이다. 다형성을 구현하기 위해 런타임에 객체를 생성해서 동적 바인딩을
 * 하는데, 이 팩토리 함수만한 것이 없는 것 같다. 최근 회사 백엔드 개발자들이 nest.js service layer에서
 * request body에서 오는 데이터를 인자로 받아서 적절한 객체를 생성하는 팩토리 함수를 사용해 OCP를 구현한 것을
 * 공유받았다.
 */
class Employee {
  constructor(name, typeCode) {
    this._name = name
    this_typeCode = typeCode
  }

  get name() {
    return this._name
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode]
  }

  static get legalTypeCodes() {
    return {
      E: 'Engineer',
      M: 'Manager',
      S: 'Salesperson',
    }
  }
}

// client
candidate = createEmployee(document.name, document.empType)

const leadEngineer = createEmployee(document.leadEngineer, 'E')

function createEmployee(name, typeCode) {
  return new Employee(name, typeCode)
}

function createEngineer(name) {
  return new Employee(name, 'E')
}
const leadEngieer = createEngineer(document.leadEngieer)
