/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

// Function Constructor
var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;

}

// Create questions and assign to an array
var q1 = new Question('Who directed 2001: A Space Odyssey, Spartacus and The Shining?', ['Stanley Kubrick', 'Steven Speilberg', 'George Lucas'], 0);
var q2 = new Question('Who directed The Royal Tenanbaums, Rushmore and Moonrise Kingdom?', ['Sofia Coppola', 'Alex Garland', 'Wes Anderson'], 2);
var q3 = new Question('Who directed Double Indemnity, The Apartment and Sunset Boulevard?', ['Fritz Lang', 'Billy Wilder', 'Orson Welles'], 1);
var quizArr = [q1, q2, q3];
var score = 0;

function randomNumber() {
    var num = Math.floor(Math.random() * quizArr.length);
    return num;
};

(function quiz() {
    var i = randomNumber();
    console.log(quizArr[i].question);
    for (var j = 0; j < quizArr.length; j++) {
        console.log(j + ': ' + quizArr[i].answers[j]);
    }
    var answer = prompt('Answer question in console or type exit to stop the quiz.')
    if (parseInt(answer) === quizArr[i].correctAnswer) {
        console.log('Correct!');
        score += 1
        console.log('Your score is ' + score);
    } else if (answer === 'exit') {
        return console.log('Thanks for playing. Your final score is ' + score);
    } else {
        console.log('Incorrect!');
        console.log('Your score is ' + score);
    }
    return quiz();
})();