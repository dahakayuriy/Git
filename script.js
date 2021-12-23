'use strict';

let score = 0;
let answer = '';
answer = prompt ('Зимой и летом одним цветом?');
if (answer === 'Ёлка'){
  alert ('Yes!');
  console.log('test');
  score = score + 1;
} else {
  alert ('No(!');
  console.log('test');
}

answer = prompt ('Кто его раздевает, тот слёзы пролевает');
if (answer === 'Лук'){
  alert ('Yes!');
  console.log('test');
  score = score + 1;
} else {
  alert ('No(!');
  console.log('test');
}

alert ('Верных ответов : ' + score);
console.log('test');
console.log ("Hi github");

