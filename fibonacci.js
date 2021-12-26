N = parseInt(prompt("Enter"))
var a = 1;
var b = 1;
var c  = 2;
while(c < N){
   var c = a+b;
   

    a = b;
    b = c;
    c++
}
console.log("the nTh term of fibonacci series is " + c);