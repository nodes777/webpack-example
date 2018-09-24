// Export a single value or to have a fallback value for our module, we can use a default export
//It is not possible to use the var, let, or const keywords on the same line as a export default
export default class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  static isPerson(person) {
    return person instanceof this;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

/*
If we were using var, let, or const, the export statement must be separate:

const Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

export default Person;
*/