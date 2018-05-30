
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

let startInterval

//console.log(questions[0])
timerStart()
startInterval = setInterval(timerStart, 1000)
//clearInterval(timerStart)
populateQuestion()
//setInterval(populateQuestion, 5000)

function start(){
  timer = 20
}

function timerStart(){
  if (timer == 0){
    clearInterval(startInterval)
    //alert('times up!')
  }
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
    let j = $('<h3 class="answers" data-answers=' + i + '>')
    j.html(questions[questionCount].answers[i])
    $('#answers').append(j)
  }
  questionCount++
}

$('.answers').on('click', function(){
  console.log($(this).text())
})
