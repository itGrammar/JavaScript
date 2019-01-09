let x = 1;
console.log(x);
// 1
let x = 1;
x = 2;
console.log(x);
// 2
let x = 1;
x = x + 1;
console.log(x);
// 2
const x = 1;
console.log(x);
// 1
const x = 1;
x = 2;
// ERROR: Uncaugh TypeError: Assignment to constant variable
console.log(x);
// the log never runs
let x = 1;
const y = 2;
x = y;
console.log(x, y, x === y);
// 2, 2, true
const xs = [1, 2, 3];
xs.push(4);
xs[0] = 100;
console.log(xs);
// [100, 2, 3, 4]
const xobj = {
  a: 1,
  b: 2
};
xobj.c = 3;
xobj.a = 100;
console.log(xobj);
// {a: 100, b: 2, c: 3}
const xs = [1, 2, 3];
xs = [4, 5, 6];
// ERROR: Uncaught TypeError: Assignment to constant variable
console.log(xs);
// the log never runs
let number = 3;
console.log(number);
number = 'but this is not a number';
console.log(number);
// 3
// "but this is not a number"
let x = 1;
{
  let x = 9;
  console.log(x):
}
console.log(x);
// 9
// 1
let x = 1;
{
  x = 9;
  console.log(x);
}
console.log(x);
// 9
// 9
let x = 1;
if(true) {
  let x = 9;
  console.log(x);
}
console.log(x);
// 9
// 1
let x = 1;
if(true) {
  x = 9;
  console.log(x);
}
console.log(x);
// 9
// 9
let x = 99;
let i = 0;
console.log('from loop');
while(i < 5) {
  i = i + 1;
  x = i;

  console.log(x);
}
console.log('from outside of loop');
console.log(x);
// "from loop"
// 1
// 2
// 3
// 4
// 5
// "from outside of loop"
// 5
let x = 99;
let i = 0;
console.log('from loop');
while(i < 5) {
  i = i + 1;
  let x = i;

  console.log(x);
}
console.log('from outside of loop');
console.log(x);
// "from loop"
// 1
// 2
// 3
// 4
// 5
// "from outside of loop"
// 99
let n = 3;
const logSuccessor = (n) => {
  console.log(n + 1);
}
logSuccessor(100);
console.log(n);
// 101
// 3
let n = 1;
let x = 9;
const logSelfAndSuccessor = (n) => {
  let x = n + 1;
  console.log(n, x);
}

logSelfAndSuccessor(100);
console.log(n, x);
// 100, 101
// 1, 9
let xobj = {
  a: 1,
  b: 9
};
let a = xobj.a;
let b = xobj.b;
console.log(a, b);
// 1, 9
let xobj = {
  a: 1,
  b: 9
};
let {a, b} = xobj;
console.log(a, b);
// 1, 9
let xs = [1, 9];
let a = xs[0];
let b = xs[1];

console.log(a, b);
// 1, 9
let xs = [1, 9];
let [a, b] = xs;
console.log(a, b);
// 1, 9
let xobj = {
  a: 1,
  b: 9
};
let { x } = xobj;
console.log(x);
// 1
let xs = [1, 9];
let [a] = xs;
console.log(a);
// 1
const getX = (obj) => obj.x;
const xobj = {
  x: 1,
  y: 9
};
console.log(getX(xobj));
// 1
const getX = ({ x }) => x
const xobj = {
  x: 1,
  y: 9
};
console.log(getX(xobj));
// 1
const getXSuccessor = ({ x }) => x + 1;
const xobj = {
  x: 1,
  y: 9
};
console.log(getXSuccessor(xobj));
// 2
const getFirst = (arr) => arr[0];
const xs = [1, 9];
console.log(getFirst(xs));
// 1
const getFirst = ([first]) => first;
const xs = [1, 9];
console.log(getFirst(xs));
// 1
const getYSuccessor = ({ y }) => y + 1;
const xobj = {
  x: 1,
  y: 9
};
console.log(getYSuccessor(xobj));
// 10
const getXPlusY = ({ x, y }) => x + y;
const xobj = {
  x: 5,
  y: 10
};
console.log(getXPlusY(xobj));
// 15
const getSecond = ([_, second]) => second;
const xs = [1, 9];
console.log(getSecond(xs));
// 9
const firstPlusSecond = ([first, second]) => first + second;
const xs = [5, 10];
console.log(firstPlusSecond(xs));
// 15
const x = 1;
const xobj = {
  x: x,
  y: 9
};
console.log(xobj);
// {x: 1, y: 9}
const x = 1;
const xobj = {
  x,
  y: 9
};
console.log(xobj);
// {x: 1, y: 9}