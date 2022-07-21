/**
 * side effect를 명시적으로 분리하기 위한 리팩토링 기법이다.
 * 저자가 무조건 쿼리에서 side effect를 분리한다고 표현할 정도로
 * 굉장히 중요하게 생각하는 느낌이 들었다.
 */

function alertForBad(people) {
  if (findBad(people)) {
    setAlarms()
  }
}

function findBad(people) {
  for (const p of people) {
    if (p === 'joker') {
      return 'joker'
    }

    if (p === 'saruman') {
      return 'saruman'
    }
  }

  return ''
}

// client
const bad = findBad(people)
alertForBad(people)
