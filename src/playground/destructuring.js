// Object Destructuring

const person = {
    name: 'Nader',
    age: 44,
    location: {
        city: 'Chelsea',
        temp: 21
    }
};

// const name = person.name;
// const age = person.age;

const {name: firstName = 'Anonymous', age} = person;

console.log(`${firstName} is ${age}.`);

const {city, temp: temperature } = person.location;

if (temperature && city) {
    console.log(`It is ${temperature} in ${city}`);
}


// Array Destructuring

const address = ['999 Pleasent Cresent', 'Chelsea', 'Victoria', '3196'];
// console.log(`You are in ${address[1]} ${address[2]}.`);

const [, citi = 'Melbourne', state] = address;

console.log(`You are in ${citi} ${state}.`);