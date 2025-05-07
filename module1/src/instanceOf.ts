{
    class Animal {
        name: string;
        species: string;
    
        constructor(name: string, species: string) {
          this.name = name;
          this.species = species;
        }
    
        makeSound() {
          console.log("I am making sound");
        }
      }

      class Dog extends Animal{
        breed: string;
        constructor(name: string, species: string, breed: string) {
          super(name, species);
          this.breed = breed;
        }
        makeBark() {
            console.log("Woof Woof");
            }
      }
      class Cat extends Animal{
        breed: string;
        constructor(name: string, species: string, breed: string) {
          super(name, species);
          this.breed = breed;
        }
        makeMeow() {
            console.log("Meow Meow");
            }
      }

     const isDog = (animal:Animal):animal is Dog =>{
        return animal instanceof Dog;
     }
     const isCat = (animal:Animal):animal is Cat =>{
       return animal instanceof Cat;
     }
     const makeSound=(animal:Animal) =>{
      isDog(animal) ? animal.makeBark() : isCat(animal) ? animal.makeMeow() : animal.makeSound();
     }

      const dog = new Dog("Buddy", "Dog", "Golden Retriever");
      const cat = new Cat("Kitty", "Cat", "Persian");
        const animal = new Animal("Lion", "Wild Animal");
        makeSound(dog); // Woof Woof
        makeSound(cat); // Meow Meow
}