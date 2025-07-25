document.addEventListener('DOMContentLoaded', function () {
  let quizData = {
  "sections": [
    {
      "sectionTitle": "Indian History",
      "questions": [
        {
          "questionType": "mcq",
          "question": "Who was the first President of independent India?",
          "options": ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Sardar Patel", "Mahatma Gandhi"],
          "answer": "Dr. Rajendra Prasad"
        },
        {
          "questionType": "text",
          "question": "Iron Man?",
          "answer": "Patel"
        },
        {
          "questionType": "mcq",
          "question": "In which year did India gain independence?",
          "options": ["1945", "1947", "1950", "1952"],
          "answer": "1947"
        },
        {
          "questionType": "text",
          "question": "Emperor after Kalinga war?",
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
          "question": "Leader of Salt March?",
          "answer": "Gandhi"
        },
        {
          "questionType": "mcq",
          "question": "Who founded the Maurya Empire?",
          "options": ["Ashoka", "Chanakya", "Chandragupta Maurya", "Bindusara"],
          "answer": "Chandragupta Maurya"
        },
        {
          "questionType": "text",
          "question": "1857 revolt name?",
          "answer": "Revolt"
        },

        
        {
          "questionType": "mcq",
          "question": "Who was the first Prime Minister of India?",
          "options": ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad"],
          "answer": "Jawaharlal Nehru"
        },
        {
          "questionType": "text",
          "question": "Father of Nation?",
          "answer": "Gandhi"
        },
        {
          "questionType": "mcq",
          "question": "Where did the Jallianwala Bagh massacre happen?",
          "options": ["Delhi", "Amritsar", "Lahore", "Lucknow"],
          "answer": "Amritsar"
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
   document.getElementById('question-container').innerHTML=` <p id="score">score:0</p>
        <div id="question"></div>
        <div id="options"></div>
        <button id="next-button">Next</button>`;

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
  if (userAnswer === questionAns || userAnswer.toLowerCase() === questionAns.toLowerCase()) {
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
    if(currentQuestionIndex>=currentQuestion.length-1){
        endQuize()
    }else{
      answerSelected=false;
    currentQuestionIndex++;
    showQuestions();}

   })

   function endQuize() {
  const questionContainer = document.getElementById('question-container');
  const quizContainer = document.getElementById('quiz-container');

  questionContainer.innerHTML = `
    <h1>Quiz Completed</h1>
    <p>Your final score: ${score}/${currentQuestion.length}</p>
    <button id="home-button">Home</button>
  `;

  document.getElementById('home-button').addEventListener("click", function () {
    quizContainer.style.display = 'grid';
    questionContainer.style.display = 'none';
  });
}

   
  }
});

