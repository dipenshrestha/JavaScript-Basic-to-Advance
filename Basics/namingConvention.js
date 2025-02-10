//Naming Convention
//for var use camelCase
var myName ='Dipen Shrestha';
console.log(myName);

//for booleans use 'is' or 'has' as prefixes
var isName = true;
console.log("Is your name is Dipen ? = " + isName);

//for function also use camelCase
function getName(dogName, ownerName){
    /* Note: for using template literals i.e. 
    return `${dogName} owners is ${ownerName}`;
    we have to use backticks (``) not single quotes ('') */

    return `${dogName} owner's is ${ownerName}`;
}
console.log(getName('puppy','dipen'));

// Template Literals
// provide a cleaner and more flexible way to handle strings
// allow string interpolation using ${}, 
// support multiline strings without escape sequences,
// and enable function calls within strings
var a = 10;
var b = 20;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);
console.log(`The sum of 5 and 10 is ${5 + 10}.`);

//for Constant use uppercase
const PI = 3.14159;
/* If the variable declaration name contains 
more than one word, you use SCREAMING_SNAKE_CASE */
const MAX_USERS = 100;
console.log(PI);         
console.log(MAX_USERS);  

//for Class use PascalCase and Components 
class DogCartoon { 
    constructor(dogName, ownerName) { 
      this.dogName = dogName; 
      this.ownerName = ownerName; 
    }
}
var cartoon = new DogCartoon('Scooby-Doo', 'Shaggy');
console.log(`${cartoon.dogName} owner's is ${cartoon.ownerName}`);

/* for private variables or functions use camelCase and use hash(#) as a prefix or you can use underscore(_) but when using underscore you can still call it */
class DogCartoons {
    constructor(dogName, ownerName) {
        this.dogName = dogName;
        this.ownerName = ownerName;
        this.name = this.#toonName(); // Directly calling the private method
    }

    #toonName() { // Private method
        return `${this.dogName} ${this.ownerName}`;
    }
}

const cartoon1 = new DogCartoons('Scooby-Doo', 'Shaggy');
console.log(cartoon1.name);  // Output: Scooby-Doo Shaggy


//for filename we use lowercase 
// Most web servers (Apache, Unix) are case-sensitive when it comes to handling files.
//On the other hand, web servers, such as Microsoft’s IIS, do not care about the case
//However, if you switch from a case-insensitive server to a case-sensitive server, even a tiny mistake can cause your website to crash.
//so we use lowercase i.e. flower.jpg