# Trivial Disputee

Welcome to Trivial Dispute--your go-to application to test your knowledge on a variety of subjects. Not ready to make your grand debut at the brewery trivia night? You're in luck--Trivial Dispute will help hone and broaden your knowledge skills to prepare you for your future as a trivia champion!

Deployed Application here: [Trivial Dispute](https://trivialdispute.vercel.app/)


## Overview <a name="overview"></a>

Trivial Dispute is a Mod 3 project at the Turing School of Software and Design that was built with `create-react-app` and tested using Cypress. React, React Router and data pulled from a backend server I created were utilized to display an assortment of different trivia catergories on page load. The user can select a category by clicking on the button with its respective name. The user is then allowed to begin the trivia game (20 questions). The user may also add a new question to the trivia database under the category "User Generated Questions". They may then click on that category on the landing page to see their own question appear in the trivia questions (once there are more than 20 questions in this category, the user may not see their question because they are being shuffled on each API call).  

I was given a 6 day timeframe to create the frontend and backend for this project. I wanted to create a backend for this project for two reasons: 
1. to gain more experience with servers/databases <br>
2. the original API was very slow and timed out quite a bit <br>

This project is our end-of-mod Showcase Project, so I thought it was important to push myself with technologies such as Express.js, Node.js, Knex.js and PostgreSQL. 

- Project Spec here: [Showcase](https://frontend.turing.edu/projects/module-3/showcase.html)

- Trivia Questions API: 
    - GitHub: [Trivia Questions API](https://github.com/KarrarQ/trivia-api)
    - Heroku: [Trivial Dispute API](https://trival-dispute-db.herokuapp.com/api/v1/questions/all)

## Installation Instructions <a name="installationInstructions"></a>

1. Clone down [this repository](https://github.com/KarrarQ/trivialdispute)
2. Run `npm install`
3. Run `npm start` in your terminal
4. Go to http://localhost:3000/ and you should see the website
5. Enter `control + c` in your terminal to stop the server at any time

## Project Goals <a name="projectGoals"></a>

- Continue to gain competency with React fundamentals, Router and Cypress testing
- Practice building a server in Express 
- Successfully populate a PostgreSQL database using Knex query builder
- Learn how to deploy both frontend and backend on Heroku 
- Gain an understanding of what is it like to create both the frontend and the backend of an application

## Directions and Features <a name="directions"></a>

Choose a trivia category out of twelve options (ten specific categories, one user generated questions category, or 'All Categories' to get questions from all of the categories). 

Once a user clicks on a category, they are presented with a trivia game featuring 20 questions from their chosen category.

Once the game is over, the user is able see their final score(percentage) and see a list of correct answers.

If the user would like to add their own question to the database, they can click on the 'Add a New Question' button which will lead them to a form that they can fill out with their own question and answers(both correct and incorrect[3]). They will get a message saying that their question was submitted successfully once they click the 'submit' button (if there are no errors).

They can then choose the category 'User Generated Questions' on the landing page to see their own test question in the game: 

## Code Architecture <a name="codeArchitecture"></a>

The React architecture is based on two class components (TriviaGameView.js, Form.js) and seven functional components (App.js, Nav.js, ErrorPage.js, GameViewContainer.js, TriviaContainer.js, CategoryCard.js, QuestionCard.js). The class components hold state and are in charge of the network requests, while the functional components render information passed down as props.

## Technologies Used <a name="techUsed"></a>

### Frontend Technologies
- React
- React Router
- Javascript
- CSS3
- HTML5
- Fetch API
- webpack
- PropTypes
- NPM
- Cypress

### Backend Technologies

- Express
- PostgreSQL
- Knex.js
- JavaScript
- Node.js
- Node Fetch
- PgAdmin4
- Heroku
- Postman
- NPM

## Testing <a name="testing"></a>

Cypress was used for E2E and integration testing. To test the application: run `npm run cypress` and you will have a window open that gives you the ability to click on each test and see whether they pass. Make sure you've run `npm start` in a separate terminal tab before you begin the testing. 

## Project Challanges <a name="projectChallanges"></a>

- Some challenging aspects of this project were:

    - Connecting Express server to PostgresSQL database using Knex
    - Deploying app using Heroku Postgres
    - Managing state without hooks or Contect API 

This project was the most challanging project I've experienced to date--I'm still new to PostgreSQL and Knex so there were often hiccups when I was implementing those technologies. The [source API](https://trivia.willfry.co.uk/) was also very slow and it took a lot of time to even write the files to my local machine (and that's when it didn't timeout mid-download!). I also struggled with the complexities of a more complicated React architecture and wish that I would have had more time to implement hooks and GSM with the Context API.

## Project Wins <a name="projectWins"></a>

- Created a fully funtional MVP with time scope of 6 days
- Continued to build a strong understanding of React framework 
- Successfully built an API with database by self-teaching Express, PostgreSQL and Knex. 
- Completed a thorough project plan and wireframe, which kept my project on track 
- Implemented React Router for a multi-page UX
- Continued to gain competency with Cypress E2E testing framework
- Utilized typechecking with PropTypes

## Future Iterations <a name="futureIterations"></a>

- A login page with authorization for users so that they could keep track of their progress as a trivia master!
- Add responsive design so users can play on their phone
- Would like to implement GSM and hooks 
- Would like to have a hall of fame page for high scorers
- An option to choose the amount of questions you want to be tested on
- WebSockets to have users connect and play against each other

## Author

This project was bootstrapped with Create React App
