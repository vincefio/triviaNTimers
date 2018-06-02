
let questions = [
  {
    q: 'What is the name of Donald Ducks girlfriend?',
    answers: [
      'Daisy Duck',
      'Betty Boop',
      'Cinderella',
      'Snow White'
    ],
    correctAnswer: 'Daisy Duck',
    picture: './assets/images/donald.jpg'
  },
  {
    q: 'What is the name of the human Princess Ariel falls in love with?',
    answers: [
      'Prince Charming',
      'The Lovely Toad',
      'Prince Eric',
      'Prince John the 4th'
    ],
    correctAnswer: 'Prince Eric',
    picture: './assets/images/ariel.jpg'
  },
  {
    q: 'In the Disney movie “Beauty and the Beast”, what is the name of Gastons bumbling sidekick?',
    answers: [
      'Lilo',
      'Kekumba',
      'Stumpy',
      'LeFou'
    ],
    correctAnswer: 'LeFou',
    picture: './assets/images/lefou.png'
  }
]

//timer
let timer = 20
let questionCount = 0
let correctAnswers= 0
let incorrectAnswers = 0
let unanswered = 0

let startInterval

$('#start').on('click', function(){
  initialStart()
})


function restart(){
  console.log('restart button  works')
  timer = 20
  questionCount = 0
  correctAnswers= 0
  incorrectAnswers = 0
  unanswered = 0
  initialStart()
}
//console.log(questions[0])
function initialStart(){

  //console.log('question count ' + questionCount)
  $('#start').remove()
  timer = 20
  timerStart()
  startInterval = setInterval(timerStart, 1000)
  //clearInterval(timerStart)
  populateQuestion()
  //setInterval(populateQuestion, 5000)

  /*function start(){
  timer = 20
  }*/
  listener()
  //$('#answers').html('<img class="answerPics" src="'+questions[questionCount].picture+'">')
}

function listener(){
  $('.answers').on('click', function(){
    //console.log($(this).text())
    console.log(questions[questionCount].correctAnswer)
    //check if answer is right or wrong
    if($(this).text() == questions[questionCount].correctAnswer){
      console.log('right answer!')
      clearInterval(startInterval)
      $('#question').html('<h2>Correct!</h2>')
      $('#answers').html('<img class="answerPics" src="'+questions[questionCount].picture+'">')
      questionCount++
      correctAnswers++
      setTimeout(function(){initialStart()}, 3000)
    }else if($(this).text() !== questions[questionCount].correctAnswer){
      console.log('wrong answer')
      clearInterval(startInterval)
      $('#question').html('<h2>Nope!</h2>')
      $('#question').append('<h3>Correct answer is ' + questions[questionCount].correctAnswer + '</h3')
      $('#answers').html('<img class="answerPics" src="'+questions[questionCount].picture+'">')
      questionCount++
      incorrectAnswers++
      setTimeout(function(){initialStart()}, 3000)
    }
  })
}

function timerStart(){
  if (timer == 0){
    clearInterval(startInterval)
    console.log('out of Time')
    clearInterval(startInterval)
    $('#question').html('<h2>Out of Time!</h2>')
    $('#question').append('<h3>Correct answer was ' + questions[questionCount].correctAnswer + '</h3')
    $('#answers').html('<img class="answerPics" src="'+questions[questionCount].picture+'">')
    questionCount++
    unanswered++
    setTimeout(function(){initialStart()}, 3000)
  }
  //console.log(timer)
  $('#timer').html(timer)

  timer--
}

function populateQuestion(){
  console.log(questionCount)
  $('#answers').html('')
  if(questionCount + 1 > questions.length){
    //alert('no more questions!')
    renderFinal()
    console.log('correct ' + correctAnswers)
    console.log('incorrect ' + incorrectAnswers)
    console.log('unanswered ' + unanswered)
  }
  else{


  let i = $('<h2 class="question">')
  //console.log(questions[questionCount])
  i.html(questions[questionCount].q)
  $('#question').html(i)
  //for loop to populate possible answers
  for(let i = 0; i < questions[questionCount].answers.length; i++){
    let j = $('<h3 class="answers" data-answers=' + i + '>')
    j.html(questions[questionCount].answers[i])
    $('#answers').append(j)
  }
  //end else
  }
  //questionCount++
}

function renderFinal(){
  $('#timer').empty()
  $('#question').empty()
  clearInterval(startInterval)
  let q = $('<div>')
  q.html('correct ' + correctAnswers)
  $('#question').append(q)
  let x = $('<div>')
  x.html('incorrect ' + incorrectAnswers)
  $('#question').append(x)
  let z = $('<div>')
  z.html('unanswered ' + unanswered)
  $('#question').append(z)

  let restartButton = $('<button type="button" id="restartButton" onclick="restart()">Restart</button>')
  $('#question').append(restartButton)
}
