// Principle 1: Encapsulation
class Animal {
    constructor(name, classification, isColdBlooded, hasBackbone) {
      // Private properties encapsulated within the class
      this._name = name;
      this._classification = classification;
      this._isColdBlooded = isColdBlooded;
      this._hasBackbone = hasBackbone;
    }
  
    // Getter methods for private properties
    getName() {
      return this._name;
    }
  
    getClassification() {
      return this._classification;
    }
  
    getIsColdBlooded() {
      return this._isColdBlooded;
    }
  
    getHasBackbone() {
      return this._hasBackbone;
    }
  
    // Abstraction: Display basic information about the animal
    displayInfo() {
      console.log(`Name: ${this._name}`);
      console.log(`Classification: ${this._classification}`);
      console.log(`Cold-Blooded: ${this._isColdBlooded}`);
      console.log(`Has Backbone: ${this._hasBackbone}`);
    }
  
    // Polymorphism: Common method for all animals
    sound() {
      console.log("Some generic animal sound");
    }
  }
  
  // Principle 2: Inheritance
  // Subclasses representing specific classes in the Animal Kingdom
  
  // Class 1: Anthropoda
  class Anthropoda extends Animal {
    constructor(name) {
      // Inheritance: Calling the constructor of the base class
      super(name, "Anthropoda", true, false);
    }
  
    // Polymorphism: Override sound method for Anthropoda
    sound() {
      console.log("Anthropoda sound");
    }
  }
  
  // Class 2: Fish
  class Fish extends Animal {
    constructor(name) {
      // Inheritance: Calling the constructor of the base class
      super(name, "Fish", true, true);
    }
  
    // Polymorphism: Override sound method for Fish
    sound() {
      console.log("Fish sound");
    }
  }
  
  // Class 3: Amphibia
  class Amphibia extends Animal {
    constructor(name) {
      // Inheritance: Calling the constructor of the base class
      super(name, "Amphibia", true, true);
    }
  
    // Polymorphism: Override sound method for Amphibia
    sound() {
      console.log("Amphibia sound");
    }
  }
  
  // Class 4: Reptiles
  class Reptiles extends Animal {
    constructor(name) {
      // Inheritance: Calling the constructor of the base class
      super(name, "Reptiles", true, true);
    }
  
    // Polymorphism: Override sound method for Reptiles
    sound() {
      console.log("Reptiles sound");
    }
  }
  
  // Class 5: Aves
  class Aves extends Animal {
    constructor(name) {
      // Inheritance: Calling the constructor of the base class
      super(name, "Aves", false, true);
    }
  
    // Polymorphism: Override sound method for Aves
    sound() {
      console.log("Aves sound");
    }
  }
  
  // Class 6: Mammals
  class Mammals extends Animal {
    constructor(name) {
      // Inheritance: Calling the constructor of the base class
      super(name, "Mammals", false, true);
    }
  
    // Polymorphism: Override sound method for Mammals
    sound() {
      console.log("Mammals sound");
    }
  }
  
  // Example usage
  const Butterfly = new Anthropoda("Butterfly");
  const catfish = new Fish("catfish");
  const frog = new Amphibia("Frog");
  const tortise = new Reptiles("tortise");
  const eagle = new Aves("Eagle");
  const cat = new Mammals("cat");
  
  // Demonstrating Encapsulation
  console.log(Butterfly.getName()); // butterfly
  
  // Demonstrating Inheritance
  console.log(tortise.getHasBackbone()); // true
  
  // Demonstrating Abstraction
  frog.displayInfo();
  
  // Demonstrating Polymorphism
  eagle.sound();
  cat.sound();
  