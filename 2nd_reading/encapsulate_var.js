let defaultOwner = { firstName: "마틴", lastName: "파울러" };

spaceship.owner = defaultOwner();

function defaultOwner() {
  /**
   * @description getter에서 원본의 복제본을 반환하는 것이 안전하다.
   * 원본은 생성하는 것은 성능상 미미할 가능성이 높지만,
   * 원본 데이터를 그대로 사용하는 것은 버그 발생확률이 높으며 디버깅하기도 힘들다.
   */
  return { ...defaultOwner };
}

function setDefaultOwner(arg) {
  defaultOwner = arg;
}