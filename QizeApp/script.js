document.addEventListener('DOMContentLoaded', function () {
  let quizData = {
 "sections":[
    { 
        "sectionTitle":"generalKnowledge",
        "questions":[
  {
    "questionType": "mcq",
    "question": "What is the capital of Australia?",
    "options": ["Sydney", "Melbourne", "Canberra", "Perth"],
    "answer": "Canberra"
  },
  {
    "questionType": "text",
    "question": "Name the largest ocean on Earth.",
    "answer": "Pacific Ocean"
  },
  {
    "questionType": "mcq",
    "question": "Which planet is known as the Red Planet?",
    "options": ["Earth", "Mars", "Jupiter", "Venus"],
    "answer": "Mars"
  },
  {
    "questionType": "text",
    "question": "Who is the current Secretary-General of the United Nations?",
    "answer": "António Guterres"
  },
  {
    "questionType": "mcq",
    "question": "Which country has the largest population?",
    "options": ["India", "USA", "China", "Indonesia"],
    "answer": "India"
  },
  {
    "questionType": "text",
    "question": "What does WHO stand for?",
    "answer": "World Health Organization"
  },
  {
    "questionType": "mcq",
    "question": "Which is the longest river in the world?",
    "options": ["Amazon", "Nile", "Yangtze", "Mississippi"],
    "answer": "Nile"
  },
  {
    "questionType": "text",
    "question": "Name any two landlocked countries.",
    "answer": "Nepal and Switzerland"
  },
  {
    "questionType": "mcq",
    "question": "Which continent has the most countries?",
    "options": ["Asia", "Africa", "Europe", "South America"],
    "answer": "Africa"
  },
  {
    "questionType": "text",
    "question": "Which animal is known as the 'Ship of the Desert'?",
    "answer": "Camel"
  }
]
    },
    {
        "sectionTitle":"science",
                  "questions":
         [
            {
              "questionType": "mcq",
              "question": "Which language runs in a web browser?",
              "options": ["Java", "C", "Python", "JavaScript"],
              "answer": "JavaScript"
            },
            {
              "questionType": "text",
              "question": "What is the full form of HTML?",
              "answer": "HyperText Markup Language"
            },
            {
              "questionType": "mcq",
              "question": "Which of the following is a JavaScript framework?",
              "options": ["React", "Laravel", "Django", "Flask"],
              "answer": "React"
            },
            {
              "questionType": "text",
              "question": "Explain the concept of closures in JavaScript.",
              "answer": "A closure is a function that retains access to its lexical scope even when executed outside of its original scope."
            },
            {
              "questionType": "mcq",
              "question": "What does CSS stand for?",
              "options": [
                "Computer Style Sheets",
                "Cascading Style Sheets",
                "Creative Style Sheets",
                "Colorful Style Sheets"
              ],
              "answer": "Cascading Style Sheets"
            },
            {
              "questionType": "text",
              "question": "What is the purpose of the useState hook in React?",
              "answer": "useState ."
            },
            {
              "questionType": "mcq",
              "question": "Which HTTP method is used to update data?",
              "options": ["GET", "POST", "PUT", "DELETE"],
              "answer": "PUT"
            },
            {
              "questionType": "text",
              "question": "Describe the difference between SQL and NoSQL databases.",
              "answer": "SQL databases are structured and use predefined schemas, while NoSQL databases are more flexible and handle unstructured data."
            },
            {
              "questionType": "mcq",
              "question": "What is the output of 2 + '2' in JavaScript?",
              "options": ["4", "22", "NaN", "undefined"],
              "answer": "22"
            },
            {
              "questionType": "text",
              "question": "What are the main features of Object-Oriented Programming?",
              "answer": "Encapsulation, inheritance, abstraction, and polymorphism are the key features of OOP."
            }
          ]          
          
     },
    {
        "sectionTitle":"Mathematics",
        "questions":[
  {
    "questionType": "mcq",
    "question": "What is the value of π (pi) to two decimal places?",
    "options": ["3.12", "3.14", "3.15", "3.16"],
    "answer": "3.14"
  },
  {
    "questionType": "text",
    "question": "What is the square root of 144?",
    "answer": "12"
  },
  {
    "questionType": "mcq",
    "question": "What is 15% of 200?",
    "options": ["25", "30", "35", "40"],
    "answer": "30"
  },
  {
    "questionType": "text",
    "question": "Solve for x: 2x + 3 = 11",
    "answer": "x = 4"
  },
  {
    "questionType": "mcq",
    "question": "What is the next prime number after 7?",
    "options": ["9", "10", "11", "13"],
    "answer": "11"
  },
  {
    "questionType": "text",
    "question": "What is the area of a circle with radius 7?",
    "answer": "154 (approx, using π = 22/7)"
  },
  {
    "questionType": "mcq",
    "question": "What is the cube of 3?",
    "options": ["6", "9", "27", "18"],
    "answer": "27"
  },
  {
    "questionType": "text",
    "question": "Define a right angle.",
    "answer": "An angle of 90 degrees."
  },
  {
    "questionType": "mcq",
    "question": "What is 8 × 7?",
    "options": ["54", "56", "58", "60"],
    "answer": "56"
  },
  {
    "questionType": "text",
    "question": "What is the formula for the perimeter of a rectangle?",
    "answer": "2 × (length + width)"
  }
]
    },
    {
        "sectionTitle":"Indian History",
        "questions":[
  {
    "questionType": "mcq",
    "question": "Who was the first President of independent India?",
    "options": ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Sardar Patel", "Mahatma Gandhi"],
    "answer": "Dr. Rajendra Prasad"
  },
  {
    "questionType": "text",
    "question": "Who was known as the 'Iron Man of India'?",
    "answer": "Sardar Vallabhbhai Patel"
  },
  {
    "questionType": "mcq",
    "question": "In which year did India gain independence?",
    "options": ["1945", "1947", "1950", "1952"],
    "answer": "1947"
  },
  {
    "questionType": "text",
    "question": "Name the famous Indian emperor who embraced Buddhism after the Kalinga war.",
    "answer": "Ashoka"
  },
  {
    "questionType": "mcq",
    "question": "Who wrote the Indian National Anthem?",
    "options": ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Subhash Chandra Bose", "Sarojini Naidu"],
    "answer": "Rabindranath Tagore"
  },
  {
    "questionType": "text",
    "question": "What was the main objective of the Non-Cooperation Movement?",
    "answer": "To resist British rule through nonviolent means."
  },
  {
    "questionType": "mcq",
    "question": "Who founded the Maurya Empire?",
    "options": ["Ashoka", "Chanakya", "Chandragupta Maurya", "Bindusara"],
    "answer": "Chandragupta Maurya"
  },
  {
    "questionType": "text",
    "question": "Who led the Salt March in 1930?",
    "answer": "Mahatma Gandhi"
  },
  {
    "questionType": "mcq",
    "question": "Which Mughal emperor built the Taj Mahal?",
    "options": ["Akbar", "Babur", "Shah Jahan", "Aurangzeb"],
    "answer": "Shah Jahan"
  },
  {
    "questionType": "text",
    "question": "What was the significance of the 1857 revolt?",
    "answer": "It was the first major uprising against British rule in India, often called the First War of Independence."
  }
]
    }
 ]
}

  initSections();

  function initSections() {
    let sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      section.addEventListener("click", () => {
        let sectionNumber = parseInt(section.getAttribute("data-section"));
        startQuiz(sectionNumber);
      });
    });
  }

  function startQuiz(index) {
  const currentQuestion = quizData.sections[index].questions; 
   let currentQuestionIndex=0;
   let score =0;
   let answerSelected = false;

   document.getElementById('quiz-container').style.display="none";
   document.getElementById('question-container').style.display="block";

   showQuestions();

   function showQuestions(){
  const question =currentQuestion[currentQuestionIndex];
  const questionElement = document.getElementById('question');
  const optionElement = document.getElementById('options');
  questionElement.textContent=question.question
  optionElement.innerHTML="";

  if(question.questionType === "mcq"){
    question.options.forEach((option, index) => {
  const opt = document.createElement('div');
  opt.textContent = option;
  
  opt.addEventListener('click', function () {
    if (!answerSelected) {
      answerSelected = true;
     highlightSelectedOption(opt);
      checkAnswer(option, question.answer); // Typo fix here too
    }
  });
  optionElement.appendChild(opt); // Correct line
 });

  }else{
    const inputElement =document.createElement("input");
    inputElement.type=question.questionType ==='number'?'number':'text';
    const submitButton = document.createElement('button');
    submitButton.textContent='Submit Answer'
    submitButton.className='submit-answer'

    submitButton.onclick= ()=>{
      if(!answerSelected){
        answerSelected=true;
        checkAnswer(inputElement.value.toString(),question.answer.toString());
      }
    }
    optionElement.appendChild(inputElement);
    optionElement.appendChild(submitButton);
  }
}



function checkAnswer(userAnswer, questionAns) {
  const feedbackElement =document.createElement("div")
  feedbackElement.id='feedback'
  if (userAnswer === questionAns) {
    console.log("Correct!");
    score++;
    feedbackElement.textContent="Correct!"
    feedbackElement.style.color="green"
  } else {
    console.log("Wrong!");
    feedbackElement.textContent=`Wrong! Correct Ans : ${questionAns}`;
  }
  const optionElement =document.getElementById("options");
  optionElement.appendChild(feedbackElement);
  updateScore();
}
function updateScore(){
  document.getElementById("score").textContent="score:"+score;
}
   
function highlightSelectedOption(selectedElement) {
  const allOptions = document.querySelectorAll('#options div');
  allOptions.forEach(option => {
    option.classList.remove('selected');
  });
  selectedElement.classList.add('selected');
}

   
   document.getElementById('next-button').addEventListener('click',()=>{
    if(currentQuestionIndex>=currentQuestion.length){
        console.log("Quiz Over!!")
    }else{
      answerSelected=false;
    currentQuestionIndex++;
    showQuestions();}

   })
   
  }
});
