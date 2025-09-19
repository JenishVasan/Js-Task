
const question = document.querySelector(".question");
const timeobj = document.querySelector(".time");
const questionRow = document.querySelector('.question-row');
const optionsContainer = document.querySelector('#options-container');
const optionA = document.querySelector('.option-a');
const optionB = document.querySelector('.option-b');
const optionC = document.querySelector('.option-c');
const optionD = document.querySelector('.option-d');
const allOptions = document.querySelectorAll(".option-box");
let QuizComplateTime = 0 ;
let current = 0;
let right = 0;
let wrong = 0;
const TOTAL_TIME = 30;
let timeInterval;
let timing;

const QuestionInfo = [
  { question: "What is JavaScript?", options: { a: "Programming language", b: "Script", c: "App", d: "None of these" }, ans: "Programming language" },
  { question: "Which company developed JavaScript?", options: { a: "Google", b: "Netscape", c: "Microsoft", d: "Oracle" }, ans: "Netscape" },
  { question: "Which symbol is used for comments in JavaScript (single line)?", options: { a: "#", b: "//", c: "/* */", d: "None of these" }, ans: "//" },
  { question: "Which of the following is NOT a JavaScript data type?", options: { a: "String", b: "Boolean", c: "Float", d: "Object" }, ans: "Float" },
  { question: "How do you declare a variable in JavaScript (ES6)?", options: { a: "let", b: "int", c: "var", d: "dim" }, ans: "let" },
  { question: "Which keyword is used to define a constant in JavaScript?", options: { a: "var", b: "let", c: "const", d: "define" }, ans: "const" },
  { question: "Which operator is used to assign a value to a variable?", options: { a: "==", b: "=", c: "===", d: "=>" }, ans: "=" },
  { question: "Which operator is used to compare both value and type?", options: { a: "==", b: "=", c: "===", d: "!=" }, ans: "===" },
  { question: "How do you write an array in JavaScript?", options: { a: "let arr = {}", b: "let arr = []", c: "let arr = ()", d: "let arr = <>" }, ans: "let arr = []" },
  { question: "Which method is used to add an element at the end of an array?", options: { a: "push()", b: "pop()", c: "shift()", d: "unshift()" }, ans: "push()" },
  { question: "Which method removes the last element of an array?", options: { a: "push()", b: "pop()", c: "shift()", d: "splice()" }, ans: "pop()" },
  { question: "Which function is used to print output in the console?", options: { a: "alert()", b: "print()", c: "console.log()", d: "document.write()" }, ans: "console.log()" },
  { question: "Which keyword is used to write a function in JavaScript?", options: { a: "method", b: "def", c: "function", d: "func" }, ans: "function" },
  { question: "What will typeof null return?", options: { a: "null", b: "undefined", c: "object", d: "number" }, ans: "object" },
  { question: "Which of these is used for strict mode in JavaScript?", options: { a: "'use strict'", b: "'strict mode'", c: "strict;", d: "use mode;" }, ans: "'use strict'" },
  { question: "How do you write an if statement in JavaScript?", options: { a: "if x > y then", b: "if (x > y)", c: "if x > y:", d: "if x > y {}" }, ans: "if (x > y)" },
  { question: "Which loop is guaranteed to run at least once?", options: { a: "for", b: "while", c: "do...while", d: "foreach" }, ans: "do...while" },
  { question: "Which built-in method converts JSON to a JavaScript object?", options: { a: "JSON.parse()", b: "JSON.stringify()", c: "JSON.toObject()", d: "parse.JSON()" }, ans: "JSON.parse()" },
  { question: "Which method converts a JavaScript object to JSON?", options: { a: "JSON.parse()", b: "JSON.stringify()", c: "toJSON()", d: "Object.JSON()" }, ans: "JSON.stringify()" },
  { question: "Which of the following is used to handle errors in JavaScript?", options: { a: "catch-try", b: "try-catch", c: "error-handler", d: "exception" }, ans: "try-catch" }
];


function displayQuestion() {
  if (current >= QuestionInfo.length) {
    showResults();
    // clearInterval(timeCa)
    return;
  }
  ansCheck()
  startTimer();

  allOptions.forEach(box => {
    box.style.backgroundColor = "";
  });


  const questionData = QuestionInfo[current];

  question.innerHTML = `${current + 1}. ${questionData.question}`;
  optionA.innerHTML = questionData.options.a;
  optionB.innerHTML = questionData.options.b;
  optionC.innerHTML = questionData.options.c;
  optionD.innerHTML = questionData.options.d;
}



function ansCheck(){
    allOptions.forEach((option)=>{
      option.addEventListener('click', answerHandler)
    })
}

function answerHandler(e) {
  allOptions.forEach(e => e.removeEventListener('click',answerHandler))
  const clickedOption = e.target

  clearInterval(timeInterval);

  const correctAns = QuestionInfo[current].ans;
 
  if (clickedOption.innerText === correctAns) {
    clickedOption.style.backgroundColor = "green";
    right++;
  } else {
    clickedOption.style.backgroundColor = "red";
    wrong++;
    allOptions.forEach((box) => {
      if (box.innerText === correctAns) {
        box.style.backgroundColor = "green";
      }
    });
  }

  current++;
  displayQuestion();
}

function showResults() {
  clearInterval(timeInterval);
  questionRow.innerHTML = `
    <div class="col-12 text-center">
      <h2>Quiz Complete!</h2>
      <h3>Final Score:</h3>
      <h4>Correct: <span style="color: green;">${right}</span></h4>
      <h4>Wrong: <span style="color: red;">${wrong}</span></h4>
      <h4>Time taken : ${QuizComplateTime} </h4>
      <button onclick="location.reload()" class="btn btn-primary mt-3">Play Again</button>
    </div>`;
  timeobj.style.display = 'none';
}

function startTimer() {

  // time line 
  let timeLine = document.querySelector('.timeline');
  timeLine.style.width = '100%';

  
  // clearInterval(timeInterval);
  timing = TOTAL_TIME;
  displayTime();


  timeInterval = setInterval(() => {
    timing--;
    let timelineWidth = (timing / TOTAL_TIME) * 100;
    timeLine.style.width = `${timelineWidth}%`;
    displayTime();
    if (timing < 0) {
      handleTimeUp();
    }
  }, 1000);
}

function handleTimeUp() {
  clearInterval(timeInterval);
  wrong++;
  current++;
  displayQuestion();
}

function displayTime() {
  const min = Math.floor(timing / 60);
  const sec = timing % 60;
  timeobj.innerHTML = `<p class="p-0 m-0 text-center">${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}</p>`;
}

// let startQuiz = document.querySelector('.start-btn')

timeCal =()=>{
  
    setInterval(()=>{
      QuizComplateTime++
      console.log('time taken : '+ QuizComplateTime)
  } ,1000 )
  
  
 } 

let startQuizBtn = document.querySelector('.start-btn')

startQuizBtn.addEventListener('click', ()=>{
  clearInterval(timeCal)
  timeCal()
  displayQuestion()
  startQuizBtn.classList.add('d-none')
})
