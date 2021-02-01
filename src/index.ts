class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const danbi = new Human("dibija55", 38, "female");

// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

// const person = {
//   name: "yskim",
//   age: 42,
//   gender: "male",
// };

const name = "yskim",
  age = 42,
  gender = "male";

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, your are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(danbi));

export {};
