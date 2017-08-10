import React, {Component} from 'react';

function Progress({value, max}) {
  let percent = value / max * 100 + '%';

  return (
    <div className="progress">
      <div className="progress-bar progress-bar-striped active"
      style={{ width: percent }}>
        <span class="sr-only">Question {value}
          of {max}</span>
      </div>
    </div>

  );
};

export default Progress;
