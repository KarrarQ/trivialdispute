import React from 'react';
import '../App/App.css';
import TriviaContainer from '../TriviaContainer/TriviaContainer';
import Nav from '../Nav/Nav';
import TriviaGameView from '../TriviaGameView/TriviaGameView';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <section className='app'>
      <Nav />
      <Route path="/:category" render={({ match }) => {
        console.log(match)
        return <TriviaGameView category={match.params.category} />;
      }} />
      <Route exact path="/">
        <TriviaContainer />
      </Route>
    </section>
  )
}
export default App;
