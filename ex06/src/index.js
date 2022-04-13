function firstName(firstName) {
    return firstName.toUpperCase();
  };
console.log(firstName("John")) ;
  
function lastName(lastName) {
    return lastName.toLowerCase();
  }
  console.log(lastName("Doe"));

exports.firstName=firstName;
exports.lastName=lastName;
