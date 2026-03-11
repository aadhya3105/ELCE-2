/*{var a = 20;
var a = 30;
console.log(a);} //global
console.log(a); 
 {let a = 20;
 a = 30;
console.log(a); }
console.log(a); 
{const b = 20;
b = 40;
console.log(b); }
console.log(b); 

let a=20;
let b=10;
console.log(a-b);
console.log(a+b);
console.log(a/b);
console.log(a*b);
console.log(a%b);
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);
console.log(a);

 //operators
let a=45;
let b="45";
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a===b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

let a=10;
a+=5;
console.log(a);
a*=2;
console.log(a);
a-=3;
console.log(a);
a/=5;
console.log(a);
a%=3;
console.log(a); 

//logical operators
let a=24;
let b=30;
console.log(a<20 && b>25);
console.log(a<20 || b>25);
console.log(!(a<20)); 

let str1="hello";
let str2="world";
let result=str1 + " " + str2;
console.log(result); 

//ternary operators
let age=18;
let message=age>=18 ? "you are an adult" : "you're a minor";
console.log(message); */

//conditional: if, elseif, else, switch
let age=25;
if(age<18){
    console.log("you're a minor");
}
else{
    console.log("you're an adult");
}

let x=10;
if(x>0){
    console.log("x is positive");
}
else if(x<0){
    console.log("x is negative");
}
else{
    console.log("x is zero");
}

let day=3;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thrusday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invaild day number");    
}