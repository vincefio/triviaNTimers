
let questions = [
  {
    q: 'What is the name of Donald Ducks girlfriend?',
    answers: [
      'Daisy Duck',
      'Betty Boop',
      'Cinderella',
      'Snow White'
    ],
    correctAnswer: 'Daisy Duck'
  },
  {
    q: 'What is the name of the human Princess Ariel falls in love with?',
    answers: [
      'Prince Charming',
      'The Lovely Toad',
      'Prince Eric',
      'Prince John the 4th'
    ],
    correctAnswer: 'Prince Eric'
  },
  {
    q: 'In the Disney movie “Beauty and the Beast”, what is the name of Gastons bumbling sidekick?',
    answers: [
      'Lilo',
      'Kekumba',
      'Stumpy',
      'LeFou'
    ],
    correctAnswer: 'LeFou'
  }
]

//timer
let timer = 20
let questionCount = 0
let correctAnswers= 0
let incorrectAnswers = 0
let unanswered = 0

//console.log(questions[0])
//setInterval(timerStart, 1000)
populateQuestion()

function start(){
  timer = 20
}

function timerStart(){
  //console.log(timer)
  $('#timer').html(timer)

  timer--
}

function populateQuestion(){
  let i = $('<h2 class="question">')
  //console.log(questions[questionCount])
  i.html(questions[questionCount].q)
  $('#question').append(i)
  //for loop to populate possible answers
  for(let i = 0; i < questions[questionCount].answers.length; i++){
    let j = $('<h3 class="answers">')
    j.html(questions[questionCount].answers[i])
    $('#answers').append(j)
  }
  questionCount++
}
