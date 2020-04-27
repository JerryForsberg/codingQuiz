/* we need to have a div for the box containing the questions and buttons.

we need the begin button to 
    1. start the timer
    2. take the questions and answer options from the array and present them to the user one by one.

we need the user to be able to select an answer. 

we need text to say whether the answer is correct or incorrect.

we need each answer to add to/ or subtract from the total score. 

if the answer is incorrect, we need to remove 10 seconds from the timer.

if the timer hits zero, the quiz should end.

Once the quiz ends, we should should the user their score, and allow them to enter their initials to save their score to the high scores. 

*/

var mainContent = document.querySelector('#main-content');
var submitButton = document.querySelector('#submitButton');
var timer = 300
var qaList = [
    {
        q: 'the selector for id in css is a:',
        answers:
        {
            a: '.',
            b: '$',
            c: '#',
            d: '*'
        },
        correctAnswer: '#'
    },
    {
        q: 'the selector for class in css is:',
        answers:
        {
            a: '&',
            b: '.',
            c: '#',
            d: '+'

        },
        correctAnswer: '.'
    },
    {
        q: 'What tag is used to define a list item in HTML:',
        answers:
        {
            a: '<ul>',
            b: '<li>',
            c: '<div>',
            d: '<a>'

        },
        correctAnswer: '<li>'
    }, {
        q: 'What tag can be used to insert a line break or blank line in an HTML document?:',
        answers:
        {
            a: '<hr>',
            b: '<break>',
            c: '<tr>',
            d: '<br>'

        },
        correctAnswer: '<br>'
    },
    {
        q: 'which tag holds the body and head of an HTML file?:',
        answers:
        {
            a: '<script>',
            b: '<html>',
            c: '<href>',
            d: '<form>'

        },
        correctAnswer: '<html>'
    },
    {
        q: 'how many columns are in a bootstrap grid?:',
        answers:
        {
            a: '16',
            b: '8',
            c: '4',
            d: '12'

        },
        correctAnswer: '12'
    },
    {
        q: 'the container for an array is:',
        answers:
        {
            a: '{}',
            b: '<>',
            c: '()',
            d: '[]'

        },
        correctAnswer: '[]'
    },
    {
        q: 'The container for an object is:',
        answers:
        {
            a: '<>',
            b: '[]',
            c: '{}',
            d: '()'

        },
        correctAnswer: '{}'
    },
    {
        q: 'to declare a variable in javascript, you would use:',
        answers:
        {
            a: '.variable',
            b: '#var',
            c: '#variable',
            d: 'var'

        },
        correctAnswer: 'var'
    },
    {
        q: 'what is the keyboard function to comment out a line?:',
        answers:
        {
            a: 'ctrl + c',
            b: 'alt + v',
            c: 'ctrl + /',
            d: 'ctrl + z'

        },
        correctAnswer: 'ctrl + /'
    },
];

var currentQuestionCounter = 0;

submitButton.addEventListener('click', loadQuestion);


function loadQuestion() {
    event.preventDefault;
    console.log('the button was clicked');

    // hide content 
    var startContent = document.querySelector('.startContent');
    startContent.style.display = 'none';

    // show content 
    var quizContent = document.querySelector('.quizContent');
    var question = qaList[currentQuestionCounter].q;
    var questionDOM = document.createElement('p');
    questionDOM.innerText = question;
    quizContent.appendChild(questionDOM);

    // first answer
    var answerA = qaList[currentQuestionCounter].answers.a;
    var answersDOM = document.createElement('button');
    answersDOM.addEventListener('click', function (event) {
        event.preventDefault;
        var correctAnswer = qaList[currentQuestionCounter].correctAnswer
        console.log('correct Answer is ', correctAnswer);
        console.log('Answer A is ', answerA);

        var message = document.createElement('p');

        if (answerA === correctAnswer) {
            message.innerText = 'Correct';

        } else {
            // wrong message
            message.innerText = 'Incorrect';
            // take time off clock

        };

        // after button is clicked
        // 1: update current question counter to next question
        currentQuestionCounter++;
        // 2: remove old question
        document.querySelector('.quizContent').innerHTML = "";
        // 3: call load next question func
        loadQuestion();

        quizContent.appendChild(message);
    })

    // answer is '.'
    // answer should be "a: '.'"
    answersDOM.innerText = 'a:  ' + answerA;
    quizContent.appendChild(answersDOM);

    // second answer
    var answerB = qaList[currentQuestionCounter].answers.b;
    var answersDOM = document.createElement('button');
    answersDOM.addEventListener('click', function (event) {
        event.preventDefault;
        var correctAnswer = qaList[currentQuestionCounter].correctAnswer
        console.log('correct Answer is ', correctAnswer);
        console.log('Answer B is ', answerB);

        var message = document.createElement('p');

        if (answerB === correctAnswer) {
            message.innerText = 'Correct';

        } else {
            // wrong message
            message.innerText = 'Incorrect';
            // take time off clock

        };
        quizContent.appendChild(message);

        // after button clicked
        // 1: update current question to next question
        currentQuestionCounter++;

        // 2: call load next question func
        document.querySelector('.quizContent').innerHTML = "";

        loadQuestion();
        quizContent.appendChild(message);
    })

    answersDOM.innerText = 'b:  ' + answerB;
    quizContent.appendChild(answersDOM);

    // third answer
    var answerC = qaList[currentQuestionCounter].answers.c;
    var answersDOM = document.createElement('button');

    answersDOM.addEventListener('click', function (event) {
        event.preventDefault;
        var correctAnswer = qaList[currentQuestionCounter].correctAnswer



        var message = document.createElement('p');

        console.log('correct Answer is ', correctAnswer);
        console.log('Answer C is ', answerC);
        // ( # === c)
        if (answerC === correctAnswer) {
            message.innerText = 'Correct';

        } else {
            // wrong message
            message.innerText = 'Incorrect';
            // take time off clock
        };
        quizContent.appendChild(message);

        // after button is clicked
        // 1: update current question counter to next question
        currentQuestionCounter++;
        // 2: remove old question
        document.querySelector('.quizContent').innerHTML = "";
        // 3: call load next question func
        loadQuestion();
        quizContent.appendChild(message);
    })

    answersDOM.innerText = 'c:  ' + answerC;
    quizContent.appendChild(answersDOM);

    // fourth answer
    var answerD = qaList[currentQuestionCounter].answers.d;


    var answersDOM = document.createElement('button');
    answersDOM.addEventListener('click', function (event) {
        event.preventDefault;
        var correctAnswer = qaList[currentQuestionCounter].correctAnswer



        var message = document.createElement('p');

        console.log('correct Answer is ', correctAnswer);
        console.log('Answer D is ', answerD);
        // ( # === d)
        if (answerD === correctAnswer) {
            message.innerText = 'Correct';

        } else {
            // wrong message
            message.innerText = 'Incorrect';
            // take time off clock
        };
        quizContent.appendChild(message);

        // after button is clicked
        // 1: update current question counter to next question
        currentQuestionCounter++;
        // 2: remove old question
        document.querySelector('.quizContent').innerHTML = "";
        // 3: call load next question func
        loadQuestion();
        quizContent.appendChild(message);
    })

    answersDOM.innerText = 'd:  ' + answerD;
    quizContent.appendChild(answersDOM);

}


