/**
 * 예외를 precheck하는 코드로 바꾸는 리팩토링이다.
 * 지금까지 예외를 사용할때의 기준이 따로 없었는데 이 리팩토링을 기법을
 * 배우고나서 예외는 정말로 예상치 못한 것에 대해 사용하기로 기준이 생긴 것 같다.
 * 그러면 nest.js를 사용할때 service layer에서 예외 케이스에 대해 무조건 throw로 처리를
 * 했었는데, use case에 대해서 레퍼런스를 찾아보고 좀 더 생각해봐야할 것 같다.
 */
class ResourcePool {
  get() {
    const result = this.available.isEmpty() ? Resource.create() : this.available.pop()
    allocated.add(result)
    return result
  }

  available() {}
  allocated() {}
}
