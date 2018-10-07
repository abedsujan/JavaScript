console.log('Hello world'); //English
console.log('Mrhabn Aalm'); //Arabic
console.log('Hej varden'); //Danish
console.log('Bonjour monde'); //French
console.log('Hola Mundo'); //Spanish
// my name, age and, height.
var name='Marwan';
console.log('hello, my name is '+name);
var myAge= 21;
console.log('I am '+myAge);
var height= 173;
console.log('my height is '+ height);
// typeofs.
console.log(typeof name);
console.log(typeof myAge);
console.log(typeof height);
// age calculator.
const yearOfBirth= 1997;
const yearFuture= 2070;

let age= yearFuture - yearOfBirth;
console.log('You will be ' + age  + ' in '+ yearFuture);
//house price calculator.
//housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300
//Peter:
/*
after creating the variables of the house dimentions,
we creat a conditon, if the difference between the pain price and the actual value is negative then he or she over paid if not, it's all good
*/
console.log('Peter house pricing:')
var H = 10
var W = 8
var D = 10
var GS = 100
var V = H * W * D;
var housePrice = V * 2.5 * 1000 + GS * 300
var paidPrice = 2500000
var paimentDiff = paidPrice - housePrice
console.log('Paid prive '+paidPrice)
console.log('actual price'+ housePrice)
console.log('difference: '+paimentDiff)
if (paimentDiff>0) {
  console.log('over paid')
  } else {
    console.log('under paid')
}
//Julia:
console.log('Julia house pricing:')
 H = 8
 W = 5
 D = 11
 GS = 70
 V = H * W * D;
var housePrice = V * 2.5 * 1000 + GS * 300
var paidPrice = 1000000
var paimentDiff = paidPrice - housePrice
console.log('Paid prive '+paidPrice)
console.log('actual price'+ housePrice)
console.log('difference: '+paimentDiff)
if (paimentDiff>0) {
  console.log('over paid')
  } else {
    console.log('under paid')
}
