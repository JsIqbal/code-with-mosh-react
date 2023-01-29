// var : function scope
// let : block scope
// const : block scope // cannot change

function sayHello() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

sayHello();

// ---------object-----------

const person = {
    name: "Mosh",
    walk() {},
    talk: function talk() {},
};
person.talk();
person.name = "";

const targetMember = "name";
person[targetMember.value] = "John";

// ------this keyword-----

// const person = {
//     name: "Mosh",
//     walk() {
//         console.log(this);
//     },
// };

// person.walk();

// const walk = person.walk;
// walk(); // here we can't access the this object reference cause walk is referencing to a standalone object.

// -------binding this----
const person = {
    name: "Mosh",
    walk() {
        console.log(this);
    },
};

person.walk();

const walk = person.walk.bind(person);
walk();

// ----------es6 arrow function ----

const square = function (number) {
    return number * number;
};

const square2 = (number) => number * number; // number goes to number * number
square2(5);

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
];

const activeJobs = jobs.filter(function (job) {
    return job.isActive;
});

const activeJobs2 = jobs.filter((job) => job.isActive); // filter jobs where job is active === true!

// -----Arrow function and this
// where we can't access this. instead get the window function
/* const person = {
    talk() {
        setTimeout(function () {
            console.log("this", this);
        }, 1000);
    },
};

person.talk();
*/

// where we can access this in traditional way
/*
const person = {
    talk() {
        var self = this;
        setTimeout(function () {
            // callback function is always a standalone function.
            console.log("self", self);
        }, 1000);
    },
};

person.talk();
*/
// where we can access this in arrow function because arrow function enherits the this keyword in its execution context! Arrow function don't rebind the this keyword!
const person = {
    talk() {
        setTimeout(() => {
            console.log("this", this);
        }, 1000);
    },
};

person.talk();

//-------array.map method----

const colors = ["red", "green", "blue"];

const items = colors.map((color) => "<li>" + color + "</li>"); // traditional templating
const items2 = colors.map((color) => `<li> ${color} </li>`); // template literals

//  ---------object destructuring-----

const address = {
    name: "Iqbal",
    city: "Dhaka",
    sector: "Sector-10",

    personal: {
        number: "xxx",
    },
};

// const name = address.name; // repetive object
// const city = address.city;
// const sector = address.sector;

const { name, city, sector } = address; // non repitive object

const { city: ct } = address;

const {
    personal: { number: contact },
} = address;

console.log(contact);

// ---spread operator----
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const combine = [...first, ...second]; // here we can add an element in the middle.
const combineX = [...first, "X", ...second];

const third = { name: "Iqbal" };
const fourth = { job: "instructor" };

const combineObject = { ...third, ...fourth, location: "BD" };

// -------class----------

class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk");
    }
}

const person = new Person("Iqbal");

// ----inheritance-----

class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk");
    }
}

class Teacher extends Person {
    constructor(name, degree) {
        super(name);

        this.degree = degree;
    }
    teach() {
        console.log("Teach");
    }
}

// modules, named and default exports
