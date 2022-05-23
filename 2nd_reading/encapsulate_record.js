const organization = {
  name: 'seunghwan',
  country: 'GB',
}

let result = `<h1>${getOrganization().name}</h1>`

const getOrganization = () => {
  return organization
}

class Organization {
  constructor(name, country) {
    this.#name = name
    this.#country = country
  }

  get name() {
    return this.#name
  }

  get country() {
    return this.#country
  }

  set name(value) {
    this._name = value
  }

  set country(value) {
    this._country = value
  }
}

const organization = new Organization('seunghwan', 'GB')
function getOrganization() {
  return organization
}