/**
 * change function declaration
 * 1. 간단한 절차
 * 2. 마이그레이션 절차
 */

/**
 * @deprecated change function declaration to circumference
 */
function circum(radius) {
    return circumference(radius)
}

function circumference(radius) {
    return 2 * Math.PI * radius
}

class Book {
    constructor(reservations) {
        this._reservations = reservations
    }

    addReservation(customer) {
        this.xx_addReservation(customer, false)
    }

    xx_addReservation(customer, isPriority) {
        this._reservations.push(customer)
    }
}

/**
 * 새 함수를 정의한 다음, 호출문에서 새로 만든 함수를 하나씩 바꿔나가자.
 * 모두 바꿨으면, 함수의 이름을 기존의 함수 이름으로 변경한다.
 */

function isNewEngland(aCustomer) {
    return ['ma', 'ct', 'me', 'vt', 'nf', 'ri'].includes(aCustomer.address.state)
}

const newEnglanders = someCustomers.filter(c => isNewEngland(c))

module.exports = {}