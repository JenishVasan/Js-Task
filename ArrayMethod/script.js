
// 1

let myColor = ["Red" , "Green" , "White" , "Black"] ;
document.write("<h3>1.Write a simple JavaScript program to print expected Output using following array </h3>")



document.write(myColor+"<br>");
document.write(myColor.join("+")+"<br>");
document.write(myColor.slice(0,3)+"<br>");
document.write(myColor.at(0)+"<br>")
document.write(myColor.slice(1,3)+"<br>")

myColor.push("orange"+"<br><br><br>");

document.write(myColor+"<br>")


// 2
document.write("<h3>2 Write a JavaScript program to get sum of all array element using for loop and foreach loop </h3>")

let arr = [1,2,3,4,5,5,6,7];

let sum = 0 ;
for(let i = 0 ;i < arr.length ; i++){
    sum+= arr[i];
}
document.write("Sum of all Elements of the Array "+arr+'<br>')
document.write(`Sum of All Array Element with for loop :- ${sum} <br >`);

// with forEach loop
sum =0 
arr.forEach(element => {
    sum+= element ;
})

document.write(`With forEach loop  :- ${sum} <br><br>`);

// 3

document.write("<h3>3.Write a JavaScript program to print a maximum and minimum value of given array.(using function and logic) </h3>")

let arr2 =[20,1,7,3,10,12,44];


let temp = arr2[0];

for(let i = 0 ; i<arr2.length ; i++){
    if(temp > arr2[i]){
        temp = arr2[i]
    }
}

document.write(`Maximun and minimum value of the Array :- [${arr2}] <br>`)

document.write(`Minimum value = ${temp} <br>`)
temp = 0 
for(let i = 0 ; i<arr2.length ; i++){
    if(temp < arr2[i]){
        temp = arr2[i]
    }
}
document.write(`Maximum Value :- ${temp}<br><br><br>`)


// 5

document.write("<h3>4.Write a JavaScript program for remove negative values using the filter array function</h3>")
let arr3 = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
document.write('Positive value of Array :'+ arr3 + "<br>")

document.write("Array : "+arr3.filter(x => x >= 0)+"<br><br><br>")

// 6

document.write("<h3>5.square of array element  </h3><br>")
let arr4 = [2, 5, 6, 3, 8, 9];

document.write(`Array :- [${arr4}] <br> `)

document.write(`Result :- ${arr4.map(x => x*2)} <br><br>`)

// 7

document.write("<h3>6. Write a JavaScript program for sort array in ascending descending</h3> <br>"+` Array : [${arr4}]<br>`)

let nums = [30, 4, 100, 25];

let result = nums.sort((a, b) => a - b);

document.write(`Ascending Order : [${result}] <br>`)
result = nums.sort((a,b) => b - a)

document.write(`descending Order :[${result}]<br><br><br> `)

// 
let arr5 = 'hello'
document.write("<h3>7.Write a JavaScript program for convert all array element in ASCII value</h3> <br>"+` Array : [${arr5}]<br>`);

let hello = arr5.split('')

document.write('Array : '+'[' + hello + ']'+'<br><br><br>' )

// 

document.write("<h3>8.Write a JavaScript program which filters out any string which is less than 8 characters. </h3><br>");

let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

document.write('Words less then 8 character : '+ words.filter( x => x.length < 8 ))

//
document.write(`<h3>9. write a JavaScript program to  to print expected output for following string. </h3>`)

let x = "airplane";

document.write(`x = '${x}' <br>`)


document.write(`Output :- `+ x.at(2)+"<br>  ")

// 
// document.write(`<h3>10.write a JavaScript program to  to print expected output for following string. </h3>`)

x = "oxoxoxox"; 

document.write("string : "+ x + " <br>" );
let newArray = x.split('').map((char)=> char == 'x' ? 'X':'o').join('')

document.write(`Output : ${newArray}<br><br>`)

// 
document.write(`<h3>10.write a JavaScript program for array reverse. </h3>`)


let arr6 = ["jenish" , "dhaval" , "varun " , "bittu "];

document.write(`Array : - [ ${arr6} ]<br>`)


document.write("Reversed array :- ["+arr6.reverse()+']' )


document.write(`<h3>11. write a JavaScript program for check value is found or not? </h3>`)

let arr7 = [10, 20, 30, 40, 50];

document.write(`Array : ${arr7} <br> Let's check if 30 exists in the array.<br> <br>`)
let value = 30;

if (arr7.includes(value)) {
    document.write(value + " is found in the array."+'<br>');
} else {
    document.write(value + " is not found in the array.");
}
//

document.write(`<h3>12.write a JavaScript program for print your name and write the no of total character.
 </h3>`)

let name = "jenish"
document.write(`My Name is :- ${name} <br> Character :- ${name.length}<br><br><br>`)

//

document.write(`<h3>13.write a JavaScript program given this output using replace concept</h3>`)

let line ="I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning"

document.write(`Input : ${line}<br>`)

let newLine = line.replaceAll( 'dog', 'cat') 

document.write(`output : ${newLine}<br><br>`)
//

document.write('<h3>14. write a JavaScript program convert string to array</h3><br>')

let str = "hi i am jenish" ;

document.write(`line : ${str}<br>`)

document.write("Array : ["+str.split("  ")+"]<br>");

//

document.write(`<h3>15. write a JavaScript program convert for array to string.</h3>`)


let input =['5', 32, 'Daniel']

document.write(`Input : [${input}] <br>`)

document.write('Output : '+ input.join(","))