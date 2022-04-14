let defaultOwner = { firstName: "마틴", lastName: "파울러" };

spaceship.owner = defaultOwner;

function getDefaultOwner() {
  return defaultOwner;
}

function setDefaultOwner(arg) {
  defaultOwner = arg;
}