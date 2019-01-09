let x = 2;
let y = x + 1;
console.log(x, y);
// 2, 3
let addOne = (n) => n + 1;

let x = 2;
let y = addOne(x);
console.log(x, y);
// 2, 3
let addOne = (n) => {
  return n + 1;
}

let x = 2;
let y = addOne(x);
console.log(x, y);
// 2, 3
let x = 2;
let y = 3;
let z = x + y;
console.log(z);
// 5
let addNumbers = (n, m) => n + m;

let x = 2;
let y = 3;
let z = addNumbers(x, y);
console.log(z);
// 5
let x = 3;
let addX = (n) => x + n;

let y = addX(4);
console.log(y, 3 + 4);

x = 1;
y = addX(4);
console.log(y, 1 + 4);
// 7, 7
// 5, 5
let addOne = (n) => n + 1;
let zero = 0;
let one = addOne(zero);
let two = addOne(one);
console.log(zero, one, two);
// 0, 1, 2
let addOne = (n) => n + 1;
let zero = 0;
let two = addOne(addOne(zero));
console.log(two);
// 2
let sumUpTo = (n) => {
  let sum = 0;
  let i = 0;
  while(i <= n) {
    sum = sum + i;
    i = i + 1;
  }
  return sum;
}
let y = sumUpTo(5);
console.log(y, 5 + 4 + 3 + 2 + 1 + 0);
// 15, 15
let sumUpTo = (n) => {
  if(n > 0) {
    return n + sumUpTo(n - 1);
  } else {
    return 0;
  }
}
let y = sumUpTo(5);
console.log(y, 5 + (4 + (3 + (2 + (1 + (0))))));
// 15, 15
let factorial = (n) => {
  if(n > 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }
}
let y = factorial(5);
console.log(y, 5 * 4 * 3 * 2 * 1);
// 120, 120
let object = {
  property: 'value'
};
console.log(object);
// {property: "value"}
let guitar = {
  strings: 6,
  material: 'wood'
};
console.log(guitar);
// {strings: 6, material: "wood"}
let guitar = {
  strings: 6,
  material: 'wood'
};
let numOfStrings = guitar.strings;
let typeOfMaterial = guitar.material;
console.log(numOfStrings, typeOfMaterial);
// 6, "wood"
let guitar = {
  strings: 6,
  material: 'wood'
};
guitar.strings = 12;
console.log(guitar);
// {strings: 12, material: "wood"}
let guitar = {
  strings: 6,
  material: 'wood'
};
guitar.strings = guitar.strings + 6;
console.log(guitar);
// {strings: 12, material: "wood"}
let guitar = {
  strings: 6,
  material: 'wood',

  // instead of a PROPERTY, this is a METHOD
  addStrings: (n) => {
    guitar.strings = guitar.strings + n;
  }
}
guitar.addStrings(6);
console.log(guitar);
// {strings: 12, material: "wood"}
let guitar = {
  strings: 6,
  material: 'wood'
}
guitar.owner = 'Ben';
console.log(guitar);
// {strings: 6, material: "wood", owner: "Ben"}
let today = [24, 10, 2017];
console.log(today, today.length);
// [24, 10, 2017], 3
let today = [24, 10, 2017];
let month = today[1];
console.log(month);
// 10
let today = [24, 10, 2017];
let newYear = 2018;
today[2] = newYear;
console.log(today);
// [24, 10, 2018]
let names = ['Jack', 'Tiffany', 'Greg'];
console.log(names);
// ["Jack", "Tiffany", "Greg"]
let names = ['Jack', 'Tiffany', 'Greg'];
names.push('Sarah');
console.log(names);
// ["Jack", "Tiffany", "Greg", "Sarah"]
let names = ['Jack', 'Tiffany', 'Greg', 'Sarah'];
let lastName = names[names.length - 1];
console.log(lastName, names);
// "Sarah", ["Jack", "Tiffany", "Greg", "Sarah"]
let names = ['Jack', 'Tiffany', 'Greg', 'Sarah'];
let lastName = names.pop();
console.log(lastName, names);
// "Sarah", ["Jack", "Tiffany", "Greg"]
// it's ok if you don't get it!
// we'll cover it more in depth in another chapter
let addOneAndApplyFunction = (n, f) => f(n + 1);
let square = (n) => n * n;
let squareOfSuccessorOf2 = addOneAndApplyFunction(2, square);
console.log(squareOfSuccessorOf2, square(2 + 1));
// 9, 9
let greet = (name) => {
  console.log('Hello, ' + name);
}
let names = ['Jack', 'Tiffany', 'Greg'];

let i = 0;
while(i < names.length) {
  let name = names[i];
  greet(name);
  i = i + 1;
}

console.log(names);
// "Hello, Jack"
// "Hello, Tiffany"
// "Hello, Greg"
// ["Jack", "Tiffany", "Greg"]
let greet = (name) => {
  console.log('Hello, ' + name);
}
let names = ['Jack', 'Tiffany', 'Greg'];

names.forEach(greet);

console.log(names);
// "Hello, Jack"
// "Hello, Tiffany"
// "Hello, Greg"
// ["Jack", "Tiffany", "Greg"]
let names = ['Jack', 'Tiffany', 'Greg'];
names.forEach((name) => {
  console.log('Hello, ' + name);
});
console.log(names);
// "Hello, Jack"
// "Hello, Tiffany"
// "Hello, Greg"
// ["Jack", "Tiffany", "Greg"]
let names = ['Jack', 'Tiffany', 'Greg'];

let i = 0;
while(i < names.length) {
  let name = names[i];
  names[i] = 'Hello, ' + name;
  i = i + 1;
}

console.log(names);
// ["Hello, Jack", "Hello, Tiffany", "Hello, Greg"]
let names = ['Jack', 'Tiffany', 'Greg'];

names.map((name) => 'Hello, ' + name);

console.log(names);
// ["Hello, Jack", "Hello, Tiffany", "Hello, Greg"]
let number = 1;
let string = 'hello';
let object = { x: 1, y: 'cheese' };
let fn = (x) => x + 1;

let mixedArray = [number, string, object, fn];
console.log(mixedArray, mixedArray[2].x);
// [1, "hello", {x: 1, y: "cheese"}, (x) => x + 1], 1
let original = { x: 1 };
let copy = original;

console.log(copy, original, copy === original);

copy.x = 2;
console.log(copy, original, copy === original);
// {x: 1}, {x: 1}, true
// {x: 2}, {x: 2}, true
let original = { x: 1 }
let similar = { x: 1 };

console.log(similar, original, similar === original);

similar.x = 2;
console.log(similar, original, similar === original);
// {x: 1}, {x: 1}, false
// {x: 2}, {x: 1}, false
let original = [1, 2];
let copy = original;

console.log(copy, original, copy === original);

copy[1] = 3;
console.log(copy, original, copy === original);
// [1, 2], [1, 2], true
// [1, 3], [1, 3], true
let original = [1, 2];
let similar = [1, 2];

console.log(similar, original, similar === original);

similar[1] = 3;
console.log(similar, original, similar === original);
// [1, 2], [1, 2], false
// [1, 3], [1, 2], false
let nestedObject = {
  object: {
    property: 'value'
  }
};
console.log(nestedObject);
console.log(nestedObject.object);
console.log(nestedObject.object.property);
// {object: {property: "value"}}
// {property: "value"}
// "value"
// we often refer to this as MATRIX
let board = [
  [1, 1, 0],
  [0, 1, 0],
  [1, 1, 1]
];
console.log(board);
console.log(board[1]);
console.log(board[1][2]);
// [[1,1,0],[0,1,0],[1,1,1]]
// [0,1,0]
// 0
let getAddN = (n) => {
  return (x) => n + x
};
let add2 = getAddN(2);
let add5 = getAddN(5);

console.log(add2(1), add5(1), getAddN(2)(3));
// 3, 6, 5
let teams = {
  blue: ['Florian', 'Kate'],
  red: ['Eve', 'Robert']
}
console.log(teams.blue[1]);
// "Kate"
let players = [
  { name: 'Florian', team: 'blue' },
  { name: 'Kate', team: 'blue' },
  { name: 'Eve', team: 'red' },
  { name: 'Robert', team: 'red' }
];
console.log(players[1].name);
// "Kate"
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evens = numbers.filter((n) => n % 2 === 0);

console.log(evens);
// [2, 4, 6, 8]
let players = [
  { name: 'Florian', team: 'blue' },
  { name: 'Kate', team: 'blue' },
  { name: 'Eve', team: 'red' },
  { name: 'Robert', team: 'red' }
];

let blueTeam = players.filter((player) => player.team === 'blue');
// NOTE: array.filter actually changes the original array

let blueTeamNames = blueTeam.map((player) => player.name);

console.log(blueTeam);
console.log(blueTeamNames);
// [{name: "Florian", team: "blue"}, {name: "Kate", team: "blue"}]
// ["Florian", "Kate"]