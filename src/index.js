import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const TASKS = [
  {
    question: 'What is blue?',
    answers: [
      'Sky', 'Gras', 'Sand', 'Other'
    ],
    correct: 0
  }, {
    question: 'What is green?',
    answers: [
      'Gras', 'Sand', 'Other', 'Sky'
    ],
    correct: 0
  }, {
    question: 'What is yellow?',
    answers: [
      'Gras', 'Other', 'Sky', 'Sand'
    ],
    correct: 3
  }
];

ReactDOM.render(<App tasks={TASKS} />, document.getElementById('root'));
registerServiceWorker();
