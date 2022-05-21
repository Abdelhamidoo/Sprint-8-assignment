"use strict";



//The total number of questions
let numberOfQuestions = 13;

//Questions counter 
let questionCounter = 0;


//The set of questions
let constString = "Enter a"
let questionArray = [
    `${constString} place`,
    `${constString} person's name`,
    `${constString}n adjective`,
    `${constString} feeling`,
    `${constString} feeling`,
    `${constString} noun`,
    `${constString} type of exercise`,
    `${constString} food`,
    `${constString} food`,
    `${constString} color`,
    `${constString} country`,
    `${constString}n adjective`,
    `${constString} preferred school`,  
]









//It stores the user's inputs
let userInputs = [];


//looping over the questions
for (let i = numberOfQuestions - 1; i>=0; i--){
    console.log(questionArray[questionCounter]);
    questionCounter++
}









//The original story
let originalStory = `One day I was walking through ${userInputs[0]} when I stumbled across ${userInputs[1]}. 
They were having a hard day and asked, "How can a ${userInputs[2]} person like you be so joyful?" I told them
that I use healthy coping strategies to reset when I'm feeling ${userInputs[3]} or ${userInputs[4]}. What is 
a healthy coping strategy, you ask? Well, it can be a lot of things. When I am sad, I talk to a ${userInputs[5]}
or a therapist. I give myself space to process by practicing ${userInputs[6]}. Sometimes I cook yummy dishes like
${userInputs[7]} or ${userInputs[8]}. Other times, I write about ${userInputs[9]} or ${userInputs[10]} or whatever
else pops into my head! After explaining this, I quickly saw my friend's mood shift. They chuckled and asked "Where
did you learn all these coping strategies?" To which I replied, "From the ${userInputs[11]} team at ${userInputs[12]}."`;


console.log(originalStory);