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
        this._reservations.push(customer)
    }
}