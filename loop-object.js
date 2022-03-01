const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
/* 
for (let i = ; i< 10; i++) {}
for (const num of numbers) {}   //array
for (const prop in student) {}  //object
*/

for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle);
for (const prop of keys) {
    console.log(prop, bottle[prop]);
}
