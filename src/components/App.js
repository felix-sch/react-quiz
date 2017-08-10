import React, {Component} from 'react';
import './App.css';
import Progress from './Progress.js';
import Question from './Question.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.tasks,
      current: 0,
      score: 0
    };
    this.checkAnswer = this.checkAnswer.bind(this);
    this.resetQuiz = this.resetQuiz.bind(this);
  }

  checkAnswer(event) {
    let answer = event.target.innerText;
    let task = this.state.tasks[this.state.current];

    if (task.answers[task.correct] === answer) {
      this.setState({score: this.state.score + 1});
    }

    this.setState({current: this.state.current + 1});
  }

  resetQuiz() {
    this.setState({current: 0, score: 0});
  }

  render() {
    let content = null;
    if (this.state.current === this.state.tasks.length) {
      content = <p className="text-center">Quiz finished.</p>;
    } else {
      content = <Question task={this.state.tasks[this.state.current]} handleClick={this.checkAnswer}/>;
    }

    return (
      <div className="container App">
        <p className="text-right">Score: {this.state.score}</p>
        <div className="panel panel-primary">
          <div className="panel-heading">
            Question
          </div>
          <div className="panel-body">
            {content}
          </div>
        </div>
        <Progress value={this.state.current} max={this.state.tasks.length}/>
        <a href="#" className="btn btn-default pull-right"
          onClick={this.resetQuiz}>Reset Quiz</a>
      </div>
    );
  }
}

export default App;
