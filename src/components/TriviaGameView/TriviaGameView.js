import React, { Component } from 'react';
import { apiCalls } from '../../apiCalls'
import GameViewContainer from '../GameViewContainer/GameViewContainer';
import { shuffle } from '../../utils';
import ErrorPage from '../ErrorPage/ErrorPage';
import '../TriviaGameView/TriviaGameView.css'

class TriviaGameView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: '',
        selectedCategory: [],
        userAnswer: null, 
        correctAnswer: '',
        currentIndex: 0,  
        possibleAnswers: [],       
        gameOver: false, 
        score: 0,   
        disabled: true,
        shuffledAnswers: []
      }
    }
  
    async componentDidMount() {
      let category = this.props.category;
      if (category === 'User Generated Questions') {
         category = 'User Generated Question';
      }
    
      try {
        let questions = (category !== 'All Categories') ? await apiCalls.getQuestionsByCategory(category) : await apiCalls.getAllCategories();
        console.log(questions)
        questions = questions.slice(0, 5)

        this.setState({ selectedCategory: questions })
        this.startGame();
      }
      catch (error) {
        this.setState({ error: error.message })
      }
    }

    startGame = () => {
      console.log("starting game...")
      const {currentIndex} = this.state;
      const question = this.state.selectedCategory[currentIndex];
      const possibleAnswers = shuffle([...question.incorrect_answers, question.correct_answer]);
      this.setState(() => {
        return {
          question: question.question,
          possibleAnswers: possibleAnswers,
          correctAnswer: question.correct_answer
        }
      })
    }
  
    handleNextQuestion = (correctAnswer) => {
      console.log('handlenextq')
      console.log(correctAnswer)
      const {userAnswer, score} = this.state
      this.setState({ currentIndex: this.state.currentIndex + 1 })
      if (userAnswer === correctAnswer) { 
        this.setState ({
          score: score + 1
       })
      }
      this.finishGame()
    }
  
    componentDidUpdate(prevProps, prevState){
      console.log(this.state)
      console.log(prevProps)
      console.log(prevState)
      this.state.shuffledAnswers=[]
      console.log(prevState.currentIndex)
      const{currentIndex} = this.state;
      console.log(currentIndex)
      if (this.state.currentIndex !== prevState.currentIndex 
        && !(currentIndex === this.state.selectedCategory.length)) {
          let currentQuestion = this.state.selectedCategory[currentIndex];
          console.log(currentQuestion)
        this.setState(() => {
          return {
            disabled: true,
            question: currentQuestion.question,
            possibleAnswers: shuffle([...currentQuestion.incorrect_answers, currentQuestion.correct_answer]),
            correctAnswer: currentQuestion.correct_answer         
          }
        });
      }
    }
  
    checkAnswer = (answer, shuffledAnswers) => {
      this.setState({
        userAnswer: answer,
        disabled: false,
        shuffledAnswers: shuffledAnswers
      })
    }
  
    finishGame =() => {
      if (this.state.currentIndex === this.state.selectedCategory.length - 1) {
        this.setState({
          gameOver: true
        })
      }
    }

    render() {
      if (this.state.error) {
        return (
        <ErrorPage message={this.state.error}/>
        )
      }
      const currentIndex = this.state.currentIndex;
      if (currentIndex > 0 && currentIndex === this.state.selectedCategory.length) {
        return (
          <div>
            <h1 className='game-over-msg'>Game Over. You got {((this.state.score / this.state.selectedCategory.length) * 100).toFixed(1)}% correct!.</h1>
            <h1 className='correct-answers-msg'>The correct answers for the quiz are:</h1>
            <ul>
              {this.state.selectedCategory.map((question, index) => (
                <h1 className='options'
                  key={index}>
                    {question.correct_answer}
                </h1>
              ))}
            </ul>
          </div>
        )
      } 
        return (
          <section className='trivia-game-view'>
            <div className='trivia-game-card'>
              <GameViewContainer score={this.state.score} disabled={this.state.disabled} total={this.state.selectedCategory.length} finishGame={this.finishGame} checkAnswer={this.checkAnswer} handleNextQuestion={this.handleNextQuestion} questions={this.state.selectedCategory} shuffledAnswers={this.state.shuffledAnswers} index={currentIndex}/>
            </div>
          </section>
        )
      }
}
    
export default TriviaGameView;