/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */
var questions = [
    {
        "Who was the last member of The Band's original line-up to join the group?": [
        "Garth Hudson",
        "Rick Danko", 
        "Richard Manuel",
        "Robbie Robertson"
        ]
    },
    {
        "What phrase did Levon use in response to Robbie’s desire to end the group that would later become the title of the documentary about him at the end of his life?": [
        "I ain’t in it for my health",
        "Do or Die",
        "Music before everything", 
        "I’ll always play" 
        ]
    },
    {
        "In the Last Waltz, how many years did the Band say they had been on the road?" : [
            "15",
            "10",
            "20",
            "5"

        ]
    },
    {
        "What were the two pretentious psychedelic band names Richard made reference to the band having considered calling themselves?": [
            "Marshmallow Overcoat and Chocolate Subway",
            "Marshmallow Overcoat and Freedom Turkey ",
            "Chocolate Subway and Electric Rainbow",
            "Electric Rainbow and Marshmallow Overcoat"
        ]
    },
    {
        "Who was the first member of the Band to Die?": [
        "Richard Manuel",
        "Garth Hudson", 
        "Rick Danko", 
        "Robbie Robertson"
        ]
    },
    {
        "Who is the oldest member of the Band?": [
            "Richard Manuel",
            "Garth Hudson", 
            "Rick Danko", 
            "Levon Helm"
        ]
    },
    {
        "Which members of the band are still alive?": [
        "Garth Hudson and Robbie Robertson",
        "Robbie Robertson and Rick Danko", 
        "Garth Hudson and Levon Helm", 
        "Levon Helm and Robbie Robertson" 
        ]
    },
    {
        "Who did Levon and the band originally get their start with? ": [
            "Ronnie Hawkins",
            "Sonny Boy Williamson",
            "Bob Dylan",
            "Carlos Santana"
        ]
    },
    {
        "What town did Levon Helm grow up in?": [
            "Turkey Scratch, Arkansas ",
            "Woodstock, New York ",
            "Biloxi, Mississippi",
            "Helena, Arkansas"
        ]
    },
    {
        "Who directed The Last Waltz?": [
            "Martin Scorsese",
            "Stephen Spielberg",
            "David Bowie",
            "The Band themselves"
        ]
    },
    {
        "Who was Bob Dylan’s ruthless manager who eventually managed the Band?": [
            "Albert Grossman",
            "Albert Watts",
            "Murray Wilson",
            "Allen Klein "
        ]
    },
    {
        "What was the Band’s first album?": [
            "Music From Big Pink",
            "The Band",
            "Cahoots",
            "Jericho"
        ]
    },
    {
        "Name the two albums The Band released with Bob Dylan:": [
        "Planet Waves and The Basement Tapes",  
        "Cahoots and Stage Fright",
        "The Basement Tapes and Blonde on Blonde",
        "Planet Waves and Blood on the Tracks"
        ]
    },
    {
        "Who played the most instruments in the Band?": [
            "Garth Hudson", 
            "Richard Manuel",
            "Robbie Robertson", 
            "Levon Helm"
        ]
    },
    {
        "What were the Band called before they were the Band?": [
            "The Hawks",
            "The Falcons",
            "The Eagles",
            "The Doves"
        ]
    },
    {
        "Why did the Band feel pressure to change their name from their prior bird-based name?": [
            "The context of the Vietnam war and current politics would have made their name sound pro-war",
            "Because they thought birds were dumb",
            "There were too many bands named after birds",
            "Management thought it wouldn’t sell"
        ]
    },
    {
        "What was the name of Levon Helm’s autobiography and story of The Band?": [
            "This Wheel’s on Fire",
            "Going down the road",
            "Best seat in the house: A drummer’s story",
            "The Midnight Ramble"
        ]
    },
    {
        "Later in Life what was the name of the event Levon Hosted at his barn in Woodstock?": [
            "The Ramble",
            "The Midnight Showcase",
            "Freedom Music Fest",
            "Levon's Late Night"
        ]
    },
    {
        "What was the name of the dog the band inherited from Bob Dylan?": [
            "Hamlet",
            "Theo",
            "Bobby Junior",
            "Crazy Chester"
        ]
    },
    {
        "What Ray Charles song was Richard Famous for covering well?": [
            "Georgia on My Mind",
            "I Got a Woman",
            "What I'd Say",
            "Mess Around"
        ]
    },
    {
        "What Band original did much of the media and listeners initially, (although mistakenly,) assume was a Dylan cover?": [
            "The Weight",
            "Cripple Creek",
            "I Shall Be Released",
            "Ophelia"
        ]
    },
    {
        "Name two Dylan songs the band covered:": [
        "When I Paint My Masterpiece and I Shall Be Released", 
        "I Shall be Released and Ophelia", 
        "Life is a Carnival and Cripple Creek", 
        "Ophelia and When I Paint My Masterpiece", 
        ]
    },
    {
        "In what city did Levon own a restaurant?": [
            "New Orleans",
            "His Hometown in Arkansas",
            "Woodstock",
            "Atlanta"
        ]
    },
    {
        "Who was the inspiration for the man Crazy Chester in the song The Weight?": [
            "A guy who thought he was sheriff and would keep watch with toy guns",
            "Their old drug dealer",
            "Richard Manuel himself",
            "The first tour manager they ever had"
        ]
    },
    {
        "How many albums did Levon say the band had before they were effectively over?": [
            "2",
            "3",
            "4",
            "1"
        ]
    },
    {
        "Which Band member died first?": [
            "Richard Manuel",
            "Garth Hudson",
            "Rick Danko", 
            "Levon Helm"
        ]
    },
    {
        "Which Band member died most recently?": [
            "Levon Helm",
            "Garth Hudson",
            "Rick Danko", 
            "Robbie Robertson" 
        ]
    },
    {
        "How Did Richard Manuel Die?": [
            "He hung himself",
            "Alcohol Withdrawal",
            "Heroin Overdose",
            "Cancer"
        ]
    },
    {
        "What was the main issue that divided the rest of the Band from Robbie Robertson?": [
            "Royalties",
            "Robbie’s Film Career",
            "Women",
            "Drug Addiction"
        ]
    },
    {
        "What was the only part of the Last Waltz not to be re-recorded?": [
            "Levon’s Drumming",
            "The Singing",
            "Muddy Water's performance",
            "Bob Dylan’s perfomance "
        ]
    },
    {
        "Which band member largely didn’t drink or do drugs?": [
            "Garth Hudson",
            "Rick Danko", 
            "Robbie Robertson", 
            "Levon Helm"
        ]
    },
    {
        "Which song did music historian Greil Marcus say was the Band’s best work?": [
            "King Harvest",
            "The Weight",
            "The Night They Drove Old Dixie Down",
            "Ophelia"
        ]
    },   
 {
        "The song Ophelia is actually based off woman of same name who was?": [
            "A prostitute",
            "An old girlfriend",
            "Robbie’s first wife",
            "A Labrador Retriever"
        ]
    },
         {
        "Who was considered to have the best voice in the band?": [
            "Richard Manuel",
            "Garth Hudson",
            "Rick Danko", 
            "Levon Helm"
        ]
    },
         {
        "Which war does Acadian Driftwood refer to?": [
            "The French and Indian War",
            "The Civil War",
            "The Revolutionary War",
            "The war of 1812"
        ]
    },
         {
        "Which famous person is not from a nearby area to where Levon grew up?": [
            "Tommy Lee Jones",
            "Billy Bob Thornton",
            "Bill Clinton",
            "Robert Johnson",
        ]
    },
         {
        "After the initial break-up the reformed version of the Band recorded a cover of what Bruce Springsteen song?": [
            "Atlantic City",
            "The River",
            "Thunder Road",
            "Jungleland"
        ]
    },
         {
        "What song did Robbie Robertson say was the best Band song that you’d never hear on the radio?": [
            "Rag Mama Ragh",
            "Acadian Driftwood",
            "King Harvest",
            "Tears of Rage"
        ]
    },
        {
        "Which band member left Dylan during the initial electric tour because he was tired of getting booed?": [
            "Levon Helm",
            "Richard Manuel",
            "Rick Danko", 
            "Robbie Robertson" 
        ]
    },
     {
        "On which live album did the Band introduce a horn section?": [
            "Rock of Ages",
            "Cahoots",
            "Before the Flood",
            "The Last Waltz", 
        ]
    },
     {
        "Who arranged the horn charts for the band?": [
            "Allen Toussaint",
            "Professor Longhair",
            "Van Morrison", 
            "Robbie Robertson" 
        ]
    },
      {
        "What was the name of the Marvin Gaye song the Band covered?": [
            "Don’t Do It",
            "Sexual Healing",
            "Stubborn Kind of Fellow",
            "Heard it Through the Grapevine"  
        ]
    },
      {
        "What did Levon describe his drumming technique on Cripple Creek as doing?": [
            "to Half the beat",
            "to play double time",
            "to swing it",
            "to let loose" 
        ]
    },
      {
        "On what song did Garth Hudson play a soprano saxophone?": [
            "It Makes No Difference",
            "Stagefright",
            "Acadian Driftwood", 
            "Rag Mama Rag" 
        ]
    },
      {
        "What was the name of the Band’s second album?": [
            "It was self-titled",
            "Music from Big Pink",
            "Jericho", 
            "The Basement Tapes" 
        ]
    },
      {
        "Which member of the band was good friends with Scorsese?": [
            "Robbie Robertson", 
            "Levon Helm",
            "Richard Manuel",
            "Rick Danko" 
            
        ]
    },
      {
        "What famous musician wanted to join the band but wasn’t allowed?": [
            "Eric Clapton",
            "Van Morrison",
            "Joni Mitchel", 
            "Ronnie Wood" 
        ]
    },
    
     {
        "Which song features a lengthy organ introduction?": [
            "Chest Fever",
            "King Harvest",
            "I Shall Be Released",
            "Life is a Carnival" 
        ]
    },
    
     {
        "According to Levon Helm, after Joni Mitchel killed the energy at the Last Waltz, what performer brought it back up?": [
            "Van Morrison",
            "Muddy Waters",
            "Ronnie Wood",
            "Neil Diamond"
        ]
    },
    
     {
        "Who was Robbie producing at the time of the Last Waltz that the rest of the band wanted nothing to do with? ": [
            "Neil Diamond",
            "Van Morrison",
            "Joni Mitchel", 
            "Ronnie Wood"
             
        ]
    },
    
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

  if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.eaea0d18-8c10-4cc0-b5ec-31134949ee0b") {
       context.fail("Invalid Application ID");
     }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "The Band Trivia"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Band Trivia. I will ask you " + GAME_LENGTH.toString()
            + " questions, try to get as many right as you can. Just say the number of the answer. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + " questions correct. Thank you for playing!";
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}