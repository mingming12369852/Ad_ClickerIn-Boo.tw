var args = process.argv;
console.log("================Boo.tw 自動刷錢器v1.4 By Bebo0010=============");
const fs = require('fs');



var array = fs.readFileSync('HTTP_IP.txt').toString().split('\n');

console.log(array);



if (args[2] != null) {
  var url = "http://boo.tw/1ub7N" + args[2];
  console.log("成功建立連線:" + url);
  if (args[3] == 1) {
    console.log("開啟正常模式");
    Hello();
  } else {
    Hello2();
    //function code...
  }


}




function Hello() {
  while (true) {
    console.log(url);
    console.log("hello");
  }
}

function Hello2() {
  var a = 0;
  while (true) {
    a++;
    console.log(url);
    console.log("hello");
    if (a == 10) {
      console.log("是我");
      a = 0;
    }
  }

}
// console.log(args[2],args[3]);
//預設重複到關閉為止

//How to User

// cd C:\Page\Money
//node Start.js <*Url> <Model> <Frequency>
//範例 ：
// node test.js 1ub7N

//*Url :
//    >> http://boo.tw/1ub7N
//    >>請輸入http://boo.tw/後面的碼
//    >> 如：1ub7N


//Model:
//斗內模式 (預設)
//    >>每執行10次後，會斗內一次連線
//正常模式 (int 1)
//    >>不開啟斗內模式

//Frequency:
//預設 :
//    >>直到關閉才會停止。
//輸入次數 :
//    >>指定"次數"後停止。

//number可輸入執行次數


// cd C:\Page\Money
// node Start.js 1ub7N
