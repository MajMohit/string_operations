const airline = 'TAP Air Portugal';
const plane = 'A2_INDIGO';
console.log(plane[1]);
console.log(airline.slice(4));
console.log(airline.toUpperCase());

const passenger = 'PrAsHAntVeRMA ';
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const firstUpper = passengerLower[0].toUpperCase() + passengerLower.slice(1,8) + passengerLower[8].toUpperCase() + passengerLower.slice(9);

let newname = firstUpper;
console.log(newname);

console.log('Prashant Verma'.split( ' '));
const[ a, b] = 'Prashant Verma'.split( ' ');
console.log(a,b);
let nonew = ['Mr',a,b.toUpperCase()].join('-');
console.log(nonew);

const namealter = function(name){
const names = name.split(' ');
// const names = name;
const namesupper = [ ];
let old;
for (const n of names ){
    // console.log(`namessuuper value is ${namesupper}`);
    // console.log(`names value is ${names}`);
   namesupper.push(n[0].toUpperCase( ) + n.slice(1));
}
 console.log(namesupper.join(' '));

}

namealter('prashant kumar verma');
namealter('aditya verma');
namealter('taj mahal agra');
// let test1 = '123444444444';
// console.log(test1 + ' ');
// const end = test1.slice(-4);
// console.log(end);
// console.log(end.padStart(test1.length,'#'));
// const mask = function(number){
// const str = number + ' ' ;
// const last = str.slice(-5);
// return last.padStart(str.length, '*');
// }
// console.log(mask(123444444444444444));
// console.log(mask(48594769303));