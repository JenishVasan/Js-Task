var a = 5, b = 3, c = 2;


var f1 = (a - b) * (a + b);
console.log("a^2 - b^2 = " + f1);


var f2 = (a*a) - (2*a*b) + (b*b);
console.log("(a-b)^2 = " + f2);

var f3 = (a*a) + (b*b) + (c*c) + 2*a*b + 2*a*c + 2*b*c;
console.log("(a+b+c)^2 = " + f3);

var f4 = (a*a) + (b*b) + (c*c) - 2*a*b - 2*a*c + 2*b*c;
console.log("(a-b-c)^2 = " + f4);

var f5 = (a*a*a) - (3*a*a*b) + (3*a*b*b) - (b*b*b);
console.log("(a-b)^3 = " + f5);     
