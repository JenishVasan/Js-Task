//greeting 
function greet(message){
    if(message == undefined){
        document.write("good morning"  + "<br> <br>");
    }else{
        document.write(message  +"<br> <br>")
    }
}

greet("hello Everyone ");



// Area of cicle
let a =15 ;
function areaCircle(r){
    let area = Math.PI*r*r ;
    return area ;
}

document.write("area of cicle is : " + areaCircle(7) + "<br>")


// Area Of Triangle 

function areaOfTriangle(l ,h ){
    return (l*h)/2 ;
}

document.write("Area Of Triangle is =" + areaOfTriangle(12,23)+ "<br>") ;


// Area of rectangle

function areaOfRectangle(l ,h ){
    return l*h ;
}

document.write("Area of cicle is = " + areaOfRectangle(15,12)+ "<br>");



//  ((b*b)*(4*a*c))/(2*a)

function formula1(a,b,c){
    return ((b*b)*(4*a*c))/(2*a) ;

}
document.write("The answer of formula1 is = " + formula1(15,2,8) +"<br>");


// (a*a) + (2*a*b) + (b*b)

function formula2(a,b,c){
    return ((b*b)*(4*a*c))/(2*a) ;

}
document.write("The answer of formula2  is = " + formula2(10,22,25) +"<br>");


//convet to celsius

function Celsius(Fahrenheit){
    return (Fahrenheit - 32 )/1.8 ;
}

document.write("temperature in Celsius : " + Celsius(120) + "<br>") ;

// celsius to ferenheit

function celsiusToFehrenheit(celsius){
    return (celsius*1.8) +32 ;
}

document.write("temperature in Ferenheit = " + celsiusToFehrenheit(25)+"<br>") ;


function OddEven(no){

    if(no !== 0){
        document.write("Entered No is : odd " + "<br>");
    }else{
        document.write("Entered No is : Even " + "<br>");
    }
    
}

OddEven(2) ;

// Swap

function Swap(a,b){

    document.write("before swap a = " + a+ ", b = " + b + "<br> ")
    a= a+b ;
    b= a-b ;
    a = a-b ;
    document.write("After Swap a = " + a  + ",  b = " + b+ "<br> ")
}

Swap(10,20);
