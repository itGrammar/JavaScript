let x = 1;
console.log(x);
// 1
let x = 1;
x = x + 2;
console.log(x);
// 3
let x = 1;
// pronounced: x PLUS-EQUALS 2
x += 2;
console.log(x);
// 3
let x = 1;
x = x / 2;
console.log(x);
// 0.5
let x = 1;
x /= 2;
console.log(x);
// 0.5
let x = 0.123;
console.log(x);
// 0.123
let x = .123;
console.log(x);
// 0.123
let x = 1.42;
x += 2.11;
console.log(x);
// 3.53
let x = 1;
x += .01;

let y = .01;
y += 1;

console.log(x, y, x === y);
// 1.01, 1.01, true
let x = 1/0;
console.log(x, x * 2, x / 2);
// Infinity, Infinity, Infinity
let x = -Infinity;
console.log(x, x + Infinity);
// -Infinity, NaN
// pronounced: NAN
// glossary: NaN = Not a Number
let x = NaN;
console.log(x, x + 1, x * 2, 1 / x);
// NaN, NaN, NaN, NaN
let x = NaN;
console.log(x === x, Number.isNaN(x));
// false, true
console.log(Math);
// Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
let x = Math.floor(1.23);
console.log(x);
// 1
let x = Math.ceil(1.23);
console.log(x);
// 2
console.log(Math.round(1.46), Math.round(1.54));
// 1, 2
const tau = 2 * Math.PI;
console.log(tau);
// 6.283185307179586
// if you don't get trig yet, don't worry about this :)
let radius = 2;
let radian = Math.PI / 2;
let center = {
  x: 3,
  y: 5
};

let x = Math.cos(radian) * radius + center.x;
let y = Math.sin(radian) * radius + center.y;
console.log(x, y);
// 3, 7
let x = 2;
let y = 7;
let biggest = Math.max(x, y);
let smallest = Math.min(x, y);
console.log(biggest, smallest);
// 7, 2
let x = 2;
let y = 3;
console.log(Math.pow(x, y), x ** y);
// 8, 8
let x = 4172834;
let y = 8938241;
let z = x - y;
console.log(z, Math.sign(z));
z = y - x;
console.log(z, Math.sign(z));
// -4765407, -1
// 4765407, 1
let x = Math.random();
console.log(x);
// the output depends on your own machine
let min = Infinity;
let max = -Infinity;
let i = 0;
while(i < 100000) {
  let rand = Math.random();
  min = Math.min(min, rand);
  max = Math.max(max, rand);
  i += 1;
}
console.log(min, max);
// 0.0000060763350770987046 0.9999893186729163
// note: this is what I had in one case.
//       the actual boundaries are pretty much 0 and 1
let x = 1e4;
console.log(x, x === 10000, x === 10**4);
// 10000, true, true
let x = 1.23e4;
console.log(x, x === 12300, x === 1.23 * 10 ** 4);
// 12300, true, true
let x = 1.23e-4;
console.log(x, x === 0.000123, x === 1.23 * 10 ** -4);
// 0.000123, true, true
console.log(12.3e3 === 1.23e4);
// true
let x = 18;
console.log(x.toString(10),
  1 * (10**1) +
  8 * (10**0));
// "18", 18
let x = 18;
console.log(x.toString(16), 
  1 * (16**1) +
  2 * (16**0));
// "12", 18
let x = 18;
console.log(x.toString(2),
  1 * (2**4) +
  0 * (2**3) +
  0 * (2**2) +
  1 * (2**1) +
  0 * (2**0));
// "10010", 18
// pronounced: let x equal HEX 12
// glossary: hexadecimal means base 16
let x = 0x12;
console.log(x);
// 18
// pronounced: let x equal BINARY 10010
let x = 0b10010
console.log(x);
// 18
// pronounced: let x equal OCTAL 22
let x = 0o22;
console.log(x, 022);
// 18, 18
let string = '18';
let num = Number.parseInt(string, 10);
console.log(string, num, +string);
// "18", 18, 18
// the last is discouraged, but can be useful
let hexString = '12';
let num = Number.parseInt(hexString, 16);
console.log(hexString, num);
// "12", 18
let x = Number.MAX_SAFE_INTEGER;
console.log(x, x + 2, x + 1 === x + 2);
// 9007199254740991, 9007199254740992, true
// note that you'd expect the last 2 results to be different.
// This will also happen in python and other languages following IEEE
let x = .1 + .2;
console.log(x, x === .3);
// 0.30000000000000004, false
// again, IEEE. Get used to it
let x = .123456;
let string = x.toFixed(2);
console.log(x, string, (.1).toFixed(2));
// 0.123456, "0.12", "0.10"
// please don't use, but be aware
console.log(true + 1, false + 1);
// 2, 1
let x = 1;
let string = 'Hello';
console.log(string + x);
// "Hello1"
let x = 4;
// pronounced: INCREMENT x
x++;
console.log(x, x++, x);
// 5, 5, 6
let x = 4;
// pronounced: PRE INCREMENT x
++x;
console.log(x, ++x, x);
// 5, 6, 6
let i = 0;
let sum = 0;
while(++i < 10) {
  sum += i;
}
console.log(sum, i);
// 45, 10
let i = 10;
let sum = 0;
while(--i > 0) {
  sum += i;
}
console.log(sum, i);
// 45, 0
let x = 0b1100;
let y = 0b1010;
// pronounced: x BITWISE OR y
let z = x | y
console.log(x, y, z, z.toString(2));
// 12, 10, 14, "1110"
// identity bitwise operations like `|0`
// are a fast way to floor SMALL numbers
let x = 2.743;
let y = x |0;
console.log(y);
// 2
let x = 0b1100;
let y = 0b1010;
// pronounced: x BITWISE AND y
let z = x & y;
console.log(z, z.toString(2));
// 8, "1000"
let x = 0b1100;
let y = 0b1010;
// pronounced: x BITWISE XOR y
let z = x ^ y;
console.log(z, z.toString(2));
// 6, "110"