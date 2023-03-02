import React from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';
import { shuffle } from '../../utils'
import './GameViewContainer.css'

const GameViewContainer = (props) => {
  let index = props.index;

  if (props.questions.length < 1) {
    return "";
  }
  const question = props.questions[index];
  const incorrectAnswers = question.incorrect_answers;
  const correctAnswer = question.correct_answer;

  let shuffledAnswers;
  if (props.shuffledAnswers.length > 0) {
    shuffledAnswers = props.shuffledAnswers;
  } else {
    shuffledAnswers = shuffle([...incorrectAnswers, correctAnswer]);
  }

  let questionCard = (
    <QuestionCard
      key={index}
      index={index}
      disabled={props.disabled}
      score={props.score}
      allQuestions={props.questions}
      question={question.question}
      shuffledAnswers={shuffledAnswers}
      correctAnswer={correctAnswer}
      id={question.id}
      checkAnswer={props.checkAnswer}
      finishGame={props.finishGame}
      handleNextQuestion={props.handleNextQuestion}
      total={props.total}
    />
  )
  return (
    <section className='game-view-container'>
      {questionCard}
    </section>
  )

}

export default GameViewContainer;