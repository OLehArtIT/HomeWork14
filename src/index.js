class Human {
  constructor(name, gender) {
      this.name = name;
      this.gender = gender;
  }
}

class Flat {
  constructor() {
      this.residents = [];
  }

  addResident(person) {
      this.residents.push(person);
  }
}

class House {
  constructor(maxFlats) {
      this.flats = [];
      this.maxFlats = maxFlats;
  }

  addFlat(flat) {
      if (this.flats.length < this.maxFlats) {
          this.flats.push(flat);
      } else {
          console.log("Невозможно добавить больше квартир.");
      }
  }
}
const person1 = new Human("Steve", "Male");
const person2 = new Human("Alex", "Female");
const person3 = new Human("Migel", "Male");
const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();

flat1.addResident(person1);
flat2.addResident(person2);
flat3.addResident(person3);

const house = new House(3);
house.addFlat(flat1);
house.addFlat(flat2);
house.addFlat(flat3);
