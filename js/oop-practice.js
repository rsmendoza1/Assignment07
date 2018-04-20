/*eslint-env browser*/

//STEP 1
//NAMED CLASS
/*function Cat() {
    "use strict";
    window.console.log("Cat");
}
//ANONYMOUS CLASS
var gato = new Cat();
window.console.log(gato.constructor);

//NAMED CLASS
function Dog() {
    "use strict";
    window.console.log("Dog");
}
//ANONYMOUS CLASS
var perro = new Dog();
window.console.log(perro.constructor);*/

//STEP 2
/*function Cat() {
    "use strict";
}
var bengal = new Cat();
var siamese = new Cat();
var persian = new Cat();
var siberian = new Cat();

function Dog() {
    "use strict";
}
var germanShepherd = new Dog();
var labradorRetriever = new Dog();
var rottweiler = new Dog();
var goldenRetriever*/

//STEP 3
/*function Animal() {
    "use strict";
}
window.console.log("The Animal has been created!");*/

/*function Animal(breed, gender, size, weight) {
    "use strict";
    this.breed = breed;
    this.gender = gender;
    this.size = size;
    this.weight = weight;
}

// CREATE ANIMAL OBJECT
var myAnimal = new Animal("German Shephard", "female", "medium", "60");

// DISPLAY
window.console.log("You have created an animal! It's a " + myAnimal.size + "," + myAnimal.gender + "," + myAnimal.breed + " and it weights " + myAnimal.weight + " pounds!");*/

//STEP 4
/*function Animal(breed, gender, size, weight) {
    "use strict";
    this.breed = breed;
    this.gender = gender;
    this.size = size;
    this.weight = weight;
}

var myAnimal = new Animal("German Shephard", "female", "medium", "60");

window.console.log("You have created an animal!");*/

//STEP 5
/*function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}

var myAnimal = new Animal("German Shephard", "female", "medium", "60");

window.console.log("You have created an animal!");*/

//STEP 6
/*var Animal = function (type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
};

var myAnimal = new Animal();
for (var property in myAnimal) {
    window.console.log(property);
}*/

//STEP 7
/*className.prototype.functionName = function (color) {
    "use strict";
    if (color > 1) {
        return "The dog is " + color + " is barking";
        } else {
        return "The cat is" + color + " is meowing";
        }
};
window.console.log(speak);*/

//STEP 8
/*var checkType; () {
    var animalType = "Dog or Cat";
    this.checkType = "";
};
window.console.log("The " + animalType + "has made a noise!");*/

//STEP 9
/*function myFunction() {
    "use strict";
    var String = "Welcome to Javascript!";
    var n = String.search("javascript");
}
window.console.log(string);*/