// Only change code below this line
class Pets{
constructor (name, legs){
this.name=name;
this.legs=legs;
    }
    walk(){
     let numberOfLegs;
    console.log(this.name + " is walking on " + this.legs + " legs");
    }     
}

    class Dog extends Pets {
        constructor (name, legs){
    super(name);
    this.legs=legs;
             }
        bark(){
    let dogSay;
   
         }


     }
 

// Only change code above this line
let dog = new Dog("Pujdo", "4"); // Change this line
console.log(dog.walk());
console.log(dog.bark());
module.exports = {
Pets,
Dog
}