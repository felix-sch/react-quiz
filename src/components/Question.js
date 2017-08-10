import React, {Component} from 'react';

function Question({task, handleClick}) {
  let answers = task.answers.map((answer, index) => {
    return (
      <li key={index}>
        <a href="#" onClick={handleClick}>{answer}</a>
      </li>
    );
  });

  return (
    <div>
      <p>{task.question}</p>
      <ol>
        {answers}
      </ol>
    </div>
  );
}

export default Question;
