const submitButton=document.querySelector("#submit");
//console.log(submitButton.innerHTML);
let height=document.querySelector("#value1");
console.log(height);

let weight=document.querySelector("#value2")
let result=document.querySelector("#resultBMI");
console.log(result.innerHTML);
submitButton.addEventListener("click",()=>{
    const height1=+height.value;
    console.log(height1);
    const heightMeter=height1/100;
    const weight1=+weight.value;
    const result1=weight1/(heightMeter*heightMeter);
    console.log(result1);
    console.log(result.innerHTML=result1.toFixed(2));
})
// let head=document.querySelector("#heading")
// console.log(head.innerHTML);

let string="vijayalaxmi";
let array=string.split("");
array.reverse();
string=array.join("");
console.log(string);



//sushama motekar : 8329013251

