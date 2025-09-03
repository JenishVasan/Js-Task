// 1

var p = document.querySelector(".para");
var a = "";

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    a += j;
  }
  a += "<br>";
}
p.innerHTML = a;


// 2
var p2 = document.querySelector(".p2");
var b = "";

for (var i = 5; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    b += j;
  }
  b += "<br>";
}
p2.innerHTML = b;


//3
var p3 = document.querySelector(".p3");
var c = "";

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    c += j;
  }
  c += "<br>";
}
p3.innerHTML = c;

// 4
var p4 = document.querySelector(".p4");
var d = "";

for (var i = 5; i >= 1; i--) {
  for (var j = 1; j <= i; j++) {
    d += i;
  }
  d += "<br>";
}
p4.innerHTML = d;

// 5

var p5 = document.querySelector(".p5");
var i1 = "";

for (var i = 1; i <= 5; i++) {
  for (var k = 5; k > i; k--) {
    i1 += "&nbsp;&nbsp;";
  }
  for (var j = 1; j <= i; j++) {
    i1 += j + " ";
  }
  i1 += "<br>";
}
p5.innerHTML = i1;

var p6 = document.querySelector(".p6");
var j1 = "";
var num = 1;

for (var i = 1; i <= 5; i++) {
  for (var j = 1; j <= i; j++) {
    j1 += num++ + " ";
  }
  j1 += "<br>";
}
p6.innerHTML = j1;




