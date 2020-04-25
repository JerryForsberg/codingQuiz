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
        correctAnswer: 'c'
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
        correctAnswer: 'b'
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
        correctAnswer: 'b'
    }, {
        q: 'the selector for class in css is:',
        answers:
        {
            a: '&',
            b: '.',
            c: '#',
            d: '+'

        },
        correctAnswer: 'b'
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
        correctAnswer: 'b'
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
        correctAnswer: 'b'
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
        correctAnswer: 'b'
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
        correctAnswer: 'b'
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
        correctAnswer: 'b'
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
        correctAnswer: 'b'
    },
];
console.log(qaList)


