import React, { Component } from 'react';
import { apiCalls } from '../../apiCalls'
import GameViewContainer from '../GameViewContainer/GameViewContainer';
import { shuffle } from '../../utils';
import '../TriviaGameView/TriviaGameView.css'

class TriviaGameView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedCategory: [],
        currentIndex: 0,
        error: '',
        score: 0
      }
    }
  
    async componentDidMount() {
      console.log(this.props);
      console.log('we mounted')
      const category = this.props.category;
      try {
        const data = (category !== 'All Categories') ? await apiCalls.getQuestionsByCategory(category) : await apiCalls.getAllQuestions();
        console.log(data)
        let questions = data;
        console.log(questions)
        this.setState({ selectedCategory: questions, currentIndex: 1 })
      }
      catch (error) {
        this.setState({ error: error.message })
      }
    }

    render() {
        console.log(this.state.selectedCategory)
        return (
          <section className='trivia-game-view'>
            <div className='trivia-game-card'>
              <GameViewContainer questions={this.state.selectedCategory}/>
            </div>
          </section>
        )
      }
}
    
export default TriviaGameView;