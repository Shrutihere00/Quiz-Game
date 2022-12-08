var questions = [
  {
    id: 1,
    question: "Javascript is an _______ language?",
    option: {
      1: "Object-Oriented",
      2: "Object-Based",
      3: "Procedural",
      4: "None of the Above",
    },
    correctAnswer: "Object-Oriented",
  },
  {
    id: 2,
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    option: {
      1: "Throws an error",
      2: "Ignores the statement",
      3: "Gives a warning",
      4: "None of the Above",
    },
    correctAnswer: "Ignores the statement",
  },
  {
    id: 3,
    question:
      ' What will be the output of the following code snippet?a = 5 + "9";document.write(a);',
    option: { 1: "Complition Error", 2: "14", 3: "Runtime Error", 4: "59" },
    correctAnswer: "59",
  },
  {
    id: 4,
    question:
      "What will be the output of the following code snippet? (function(){setTimeout(()=> console.log(1),2000);console.log(2); setTimeout(()=> console.log(3),0);console.log(4);})();",
    option: { 1: "1 2 3 4", 2: "2 3 4 1", 3: "2 4 3 1", 4: "4 3 2 1" },
    correctAnswer: "2 4 3 1",
  },
  {
    id: 5,
    question: " What does the Javascript “debugger” statement do?",
    option: {
      1: "It will debug all the errors in program at runtime.",
      2: "It acts as  a breakpoint in a program.",
      3: "It will debug error in the current statement if any.",
      4: "All of the above.",
    },
    correctAnswer: "It acts as  a breakpoint in a program.",
  },
  {
    id: 6,
    question:
      "What will be the output of the following code snippet? var a = Math.max();var b = Math.min(); print(a);print(b);",
    option: {
      1: "-Infinity Infinity",
      2: "Infinity -Infinity",
      3: "Infinity Infinity",
      4: "-Infinity -Infinity",
    },
    correctAnswer: "-Infinity Infinity",
  },
  {
    id: 7,
    question:
      "What will be the output of the following code snippet? var a = true + true + true * 3;print(a)",
    option: { 1: "3", 2: "0", 3: "Error", 4: "5" },
    correctAnswer: "5",
  },
  {
    id: 8,
    question:
      "How are objects compared when they are checked with the strict equality operator?",
    option: {
      1: "The contents of the objects are compares",
      2: "Their references are compared",
      3: "Both A and B",
      4: "None of the Above",
    },
    correctAnswer: "Their references are compared",
  },
];
var result = document.querySelector(".result");
var question = document.querySelector(".question");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let labelOfoption1 = document.querySelector(".option1");
let labelOfoption2 = document.querySelector(".option2");
let labelOfoption3 = document.querySelector(".option3");
let labelOfoption4 = document.querySelector(".option4");
let btn = document.querySelector(".btn");
let ul = document.querySelector(".ul");
let buttonStart = document.querySelector(".buttonstart");
const options = document.querySelectorAll(".option");
let usersScore = 0;
const start = () => {
  ul.style.display = "block";
  buttonStart.style.display = "none";
  btn.style.display = "block";
  loadQuestion();
};
let questionCount = 0;
const loadQuestion = () => {
  question.innerHTML = questions[questionCount].question;
  labelOfoption1.innerHTML = questions[questionCount].option[1];
  labelOfoption2.innerHTML = questions[questionCount].option[2];
  labelOfoption3.innerHTML = questions[questionCount].option[3];
  labelOfoption4.innerHTML = questions[questionCount].option[4];
  questionCount++;
};
const getCheckAnswer = () => {
  let answer;
  function myfunction(item) {
    if (item.checked) {
      answer = item.id;
    }
  }
  options.forEach(myfunction);
  return answer;
};
const getLabel = (inputId) => {
  const label = document.querySelector(`label[for=${inputId}]`);
  return label.innerHTML;
};
const submit = () => {
  const usersAnswer = getCheckAnswer();
  if (getLabel(usersAnswer) === questions[questionCount - 1].correctAnswer) {
    usersScore++;
  }
  if (questionCount < questions.length) {
    loadQuestion();
  } else {
    alert(`Your score is ${usersScore} out of ${questions.length}`);
    location.reload();
  }
  var radio = document.querySelector("input:checked");
  radio.checked = false;
};
