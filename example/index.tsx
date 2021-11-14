import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { WeeklyCalendar } from '../src'

const App = () => {

  const handleOnWeekPick = (startDate, endDate): void => {
    console.log(startDate);
    console.log(endDate);
  }

  return (
    <div>
      <WeeklyCalendar onWeekPick={handleOnWeekPick}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
