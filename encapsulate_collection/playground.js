class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  get name() {
    return this._name;
  }
  get courses() {
    this._courses;
  }
  set courses(aList) {
    this._courses = aList;
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name() {
    this._name;
  }
  get isAdvanced() {
    return this._isAdvanced;
  }
}

/**
 * usecase in client
 */
// getter를 이용해서 캡슐화를 유지한다.
const numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length;

// 하지만 setter에 의해 캡슐화가 깨지게 된다.
// 클래스가 컬렉션을 제어할 수가 없다.
aPerson.courses = basicCourseNames.map(name => new Course(name, false));

// 캡슐화를 위해서 컬렉션을 추가하고 제거하는 메서드를 추가하자.
/**
 * Person class
 */
addCourse(aCourse){
    this._courses.push(aCourse);
}

removeCourse(aCourse, fnIfAbsent = () => { throw new RangeError()}) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    else this._courses.splice(index, 1)
}

// 그런 다음 컬렉션을 직접 호출해서 변경하던 코드를 수정한다.
for (const name of basicCourseNames()) {
    aPerson.addCourse(new Course(name, false))
}

module.exports = {};
