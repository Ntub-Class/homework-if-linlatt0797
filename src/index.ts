// 請介紹兩個字串方法跟數字方法
//replace()
var re = /(\w+)\s(\w+)/; 
var str = "zara ali"; 
var newstr = str.replace(re, "$2, $1"); 
console.log(newstr); // ali, zara

//search()
var re = /apples/gi; 
var str = "Apples are round, and apples are juicy.";
if (str.search(re) == -1 ) { 
   console.log("Does not contain Apples" ); 
} else { 
   console.log("Contains Apples" ); 
} 

//valueOf()
var num = new Number(1000000); 
console.log(num.valueOf());

//toFixed()
var num3 = 177.234 
console.log("num3.toFixed() is "+num3.toFixed()) 
console.log("num3.toFixed(2) is "+num3.toFixed(2)) 
console.log(num3.toFixed(6))


// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值

if (money < limit) {
    console.log('叫乾爹')
} else {
    console.log('no')
}


