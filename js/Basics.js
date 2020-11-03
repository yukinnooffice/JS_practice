'use strict';

console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(10 ** 3);

console.log(2 + 10 * 3);
console.log((2 + 10) * 3);

console.log(150 * 140);
console.log(150 * 160);

let price = 150;
console.log(price * 140);
console.log(price * 160);

price = 170;
console.log(price * 140);
console.log(price * 160);

let price2 = 500;
price2 += 100; 
price2 ++ ; 
price2 -- ; 
console.log(price2)

// typeofはデータ型を確認する
console.log(typeof 'hello');
console.log(typeof 5);
console.log(typeof true);
console.log(typeof 'undefained');
console.log(typeof null);

console.log('5' * 3);
console.log('5' - '3');
//文字列の連結
console.log(parseInt('5',10) + 3);
//parseInt10進数の数値に変換
console.log(parseInt('hello', 10));

const price3 = 1200;

console.log(price3 > 1000); //true
console.log(price3 < 1000); //false
console.log(price3 >= 1000); //true
console.log(price3 <= 1000); //false
console.log(price3 === 1000); //false
console.log(price3 !== 1000); //true


console.log(Boolean(0));
console.log(Boolean('hello'));

const score = 85;

if (score >= 80) {
  console.log('Great!');
} else {
  console.log('OK...');
}

score >= 80 ? console.log('Great!') : console.log('OK...');

const score2 = 60;
const name = 'taguchi';

if(score2 >= 50){
  if (name === 'taguchi'){
    console.log('Good job!');
  }
}

if (score >= 50 && name === 'taguchi'){
  console.log('Good job!');
}

//switch文
// && なおかつ（and）
// ||もしくは(OR)
// ! ~ ではない(not)

const signal = 'pink';

switch(signal) {
  case'red':
    console.log('stop!');
    break;
  case'yllow':
    console.log('Cautinon!');
    break;
  case'blue':
  case'green':
    console.log('GO!');
    break;
  default:
    console.log('Wrong signal!')
}

for (let i = 1; i <= 10; i++){
  // console.log('hello');
  // console.log('hello' + i);
  console.log(`hello ${i}`)
}

// let hp = 100;

// while(hp > 0) {
//   console.log(`${hp} HP left!`)
//   hp -= 15 ;
// }

let hp = -50;
//処理を後にする。
do  {
  console.log(`${hp} HP left!`)
  hp -= 15 ;
} while(hp > 0)


for (let i = 1; i <= 10; i++){
  // if(i === 4) {
  //   continue;//４だけスキップ
  // }
  // if(i % 3 === 0){
  //   continue;
  // }

  if (i === 4 ){
    break;
  }
  console.log(i)
}

//関数
function showAd(message = 'Ad'){//実引数が何もないとAdが渡される
  console.log('______________');
  console.log(`______${message}______`);
  console.log('______________');
}
showAd('Header Ad'); // 実引数
console.log('Tom is great!');
console.log('Bob is great!');
// showAd('Ad');
showAd();
console.log('Steve is great!');
console.log('Richard is great!');
showAd('Footer Ad');

// function sum(a,b,c){
//   // console.log(a + b + c);
//   return a + b + c; //実行はここで止まる
// }

// sum(1, 2, 3);//関数呼び出し
// sum( 3, 4, 5);
// const sum = function(a , b, c) {
//   return a + b + c;
// };
// const sum = (a , b, c) => a + b + c;


// const total = sum(1 ,2 ,3) + sum(3 , 4, 6)//18
// console.log(total);

// const double = function(a){
//   return a * 2;  
// }

//アロー関数
const double = a => a * 2;
console.log(double(12));

// const x = 2;

// function f() {
//   const x = 1;
//   console.log (x);
// }

// f();
// console.log(x);

const x = 100;
console.log(x);
