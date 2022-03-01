const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleand: true
};
//getting all property names
const keys = Object.keys(bottle);
// console.log(keys);

// get all values
const values = Object.values(bottle);
// console.log(values);

const pairs = Object.entries(bottle);
// console.log(pairs);
//seal ()--------------
// Object.seal(bottle);
// freeze----------
Object.freeze(bottle);
bottle.price = 100;
//delete------------
delete bottle.isCleand;
console.log(bottle);
