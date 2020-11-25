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



