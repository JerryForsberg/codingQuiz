# codingQuiz
- Javascript:

    - The javascript file first creates an array with objects inside of it to store the questions and answers
    
    - The currentQuestionCounter begins at 0 and goes up 1 with ++ after each question
    
    - The submit button will begin the function loadQuestion

    - loadQuestion function:
            
            - Hides the startContent div

            - Sets the text content of a new paragraph to the question of the array index that is currently being counted and appends it to the page

            - Has answer A, B, C, D for the first question, which gets changed each time the currentQuestionCounter goes up

            - AnswersDom runs a function when the button is clicked

            - It will check if the answer is the correct answer. If it is, a message with text will say correct. If it is incorrect, a wrong message will show up.

            - After the function runs, the prior question clears and the function runs again, with the next question.