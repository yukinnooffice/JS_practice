'use strict';
{
  const otherScores = [ 10, 20];
  const scores = [ 80, 90, 40, 70, ...otherScores ];//スプレッド文　配列を展開
  // scores.push(60,50);//配列を後ろから追加　push
  // scores.shift();//配列を先頭から消す　shift
  //  90, 40, 70, 60, 50
  //  scores.splice(1,1,40,50)//splice(途中から要素を開始する番号,削除数,追加する要素)
  // console.log(`Score: ${scores[0]}`)
  // console.log(`Score: ${scores[1]}`)
  // console.log(`Score: ${scores[2]}`)

  // for(let i = 0 ; i < 3 ; i++){
  for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);

  　function sum(a,b){
    console.log(a+b);
  }
  sum(...otherScores);
  
  }
}

{
  const scores = [ 80, 90, 40, 70,];
  
  // const [ a, b, c, d] = scores;
  // console.log(a)
  // console.log(b)
  // console.log(c)
  // console.log(d)

  // const [a,  b, ...others] = scores
  // console.log(a);
  // console.log(b);
  // console.log(others);

  // let x = 30;
  // let y = 70;
  // [x,y] = [y,x];
  // console.log(x)
  // console.log(y)

  // scores.forEach((score) => {
  scores.forEach((score,index) => {
    console.log(`Score ${index}: ${score}`)
  });
}

//mapを使ってみよう
{
  const prices = [180, 190, 200];
  
  // const updatedPrices = prices.map((price) => {
  //   return price + 20;
  // });
  const updatedPrices = prices.map(price => price + 20);

  console.log(updatedPrices)
}

//filterを使ってみよう
{
  const numbers = [1, 4, 7, 8, 10];

  // const evenNumbers = numbers.filter(number => {
  //   if(number % 2 === 0){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  const evenNumbers = numbers.filter(number => number % 2 === 0);//省略


  console.log(evenNumbers)
}

//オブジェクトを作ってみよう
{
  // const point = [100, 180];
  // const point = {x:100, y;180};
  const point = {
    x:100,//プロパティ
    //キー、値
    y: 180,
  };
  console.log(point);
}

//プロパティを操作してみよう

{
  const point = {
    x:100,
    y: 180,
  };

  point.x = 120;
  // point[`x`]= 120;
  //   console.log(point.x);
  //   console.log(point[`y`]);
  point.z = 90;
  delete point.y;
  console.log(point);
  };

  //オブジェクトを操作してみよう

{ 
  const otherProps = {
    r: 4,
    color: 'red'
  };
  const point = {
    x:100,
    y: 180,
    ...otherProps,
  };
  console.log(point);

  const{x, r, ...othrers} = point;
  console.log(x);
  console.log(r);
  console.log(othrers);
}

//object.keys()を使ってみよう
{
    const point = {
    x:100,
    y: 180,
  };

  // const keys = Object.keys(point);
  // keys.forEach(key => {
  //   console.log(`key: ${key} Value: ${point[key]}`);   
  // });

  const points = [
    {x: 30, y: 20},
    {x: 50, y: 70},
    {x: 90, y: 90},
  ];
  console.log(points[1.].y);
}

//変数を代入してみよう

{
  // let x = 1;
  // let y = x;
  // x = 5;
  // console.log(x); //5
  // console.log(x); //1
  let x = [1, 2];
  let y = x;
  x[0] = 5;
  console.log(x); //[5,2]
  console.log(y); //[1,2]

}

//変数の挙動を理解しよう
{
let x = [1, 2];
let y = [...x];
x[0] = 5;
console.log(x); //[5,2]
console.log(y); //[1,2]
}

//文字列を操作してみよう
{
  const str = 'hello';

  console.log(str.length)

  // str.substring(開始位置,終了位置)
  console.log(str.substring(2, 4));

  console.log(str[1]);
}

//join()､split()を使ってみよう
{
  const d = [2019, 11 , 14];

  // console.log(d.join('/'));
  // console.log(d.join(''));

  const t = '17:08:24';
  // console.log(t.split(':'));
  const [hour, minute , second] = t.split(':');
  console.log(hour)
  console.log(minute)
  console.log(second)
}

// #19 数値を操作してみよう 
{
  const scores = [10, 3, 9];
 
  let sum = 0;

  scores.forEach(score => {
    sum += score;
  });

  const avg = sum / scores.length;
  // console.log(sum);
  // console.log(avg);

  console.log(Math.floor(sum));
  console.log(Math.ceil(sum));
  console.log(Math.round(sum));
  console.log(avg.toFixed(3));

  console.log(Math.random());
}
// 20 ランダムな整数値を作ってみよう
  {
    // console.log(Math.random());
  
    // 0, 1, 2
    // Math.floor(Math.random() * 3)
    // 0, ..., n
    // Math.floor(Math.random() * (n + 1))
    // min, ..., max
    // Math.floor(Math.random() * (max + 1 - min)) + min
  
    console.log(Math.floor(Math.random() * 6) + 1);
  }
  
// 21 現在日時を扱ってみよう 

{
  const d = new Date();
  console.log(d);
  console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`)

}
//22 特定の日時を扱ってみよう 

{
  const d = new Date(2019, 10);
  d.setHours(10,20,30);
  d.setDate(d.getDate() + 3);
  console.log(d);
}

//23 alert()､confirm()を使ってみよう
  // alert('hello');
//   const answer = confirm('削除しますか？');
//   if (answer) {
//     console.log('削除しました');
//   } else{
//     console.log('キャンセルしました')
//   }
// }
//24 setInterval()を使ってみよう 

// {
//   let i = 0;

//   function showTime() {
//     console.log(new Date());
//     i++;
//     if (i > 2) {
//       clearInterval(intervalId);
//     }
//   }

//   const intervalId = setInterval(showTime, 1000);
// }

//25 setTimeout()を使ってみよう
// {
//   let i = 0;
//   function showTime() {
//   console.log(new Date());
//   const timeoutId = setTimeout(showTime, 1000);
//   i++
//   if (i > 2){
//     clearTimeout(timeoutId);
//   }
//   }

//   showTime();
// }

//26 タイマー処理の違いを理解しよう 
//setIntervalは処理が重なっていても処理が実行され続け、システムに負荷がかかる
//setTimeoutは処理が重なって実行される事がないので、システムに負荷がかからない

//27 例外処理を使ってみよう
{
  const name = 3;

  try {
  console.log(name.toUpperCase());
  } catch(e) {
  console.log(e);
  }
  console.log('finish')

}
//28 オブジェクトが複数ある場合を考えよう
{
  const posts = [
    {
      text: 'JavaScriptの勉強中…',
      likeCount: 0,
    },
    {
      text: 'プログラミング楽しい！',
      likeCount: 0,
    },
  ];

  function show(post) {
    console.log(`${post.text} - ${post.likeCount}いいね`);
  }

  show(posts[0]);
}