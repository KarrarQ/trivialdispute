import React, { Component } from 'react';
import { apiCalls } from '../../apiCalls'
import GameViewContainer from '../GameViewContainer/GameViewContainer';
import './TriviaGameView.css'

class TriviaGameView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedCategory: [],
        error: ''
      }
    }
  
    async componentDidMount() {
      console.log(this.props);
      console.log('we mounted')
      const category = this.props.category;
      try {
        const data = (category !== 'All Movies') ? await apiCalls.getQuestionsByCategory(category) : await apiCalls.getAllQuestions();
        let questions = data;
        console.log(questions)
        this.setState({ selectedCategory: questions })
      }
      catch (error) {
        this.setState({ error: error.message })
      }
    }

    render() {
        console.log(this.state.selectedCategory)
        return (
          <section className='trivia-game-card'>
            <GameViewContainer questions={this.state.selectedCategory}/>
          </section>
        )
      }
}
    
export default TriviaGameView;