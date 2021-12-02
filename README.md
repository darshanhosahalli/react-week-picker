# React Week Picker

React week picker is a resuable calendar component that allows a user to select weeks. You can perform action on week select action and also provides an optional action 'jump to current week' to make the calendar jump to current week. Both actions can be provided a call back function to be called to execute custom code. 

<div align="center">
  <img width="436" heigth="398" src="https://react-week-picker.s3.ap-south-1.amazonaws.com/react-week-picker.png">
</div>

for a demo <a href="http://react-week-picker.s3-website.ap-south-1.amazonaws.com/">click here</a>

## Installation

Run the npm installation cmd to install the dependency in your project:

```bash
npm i react-week-picker # or yarn add react-week-picker
```

## Some the component provided that can be extended

* Button
* Calendar
* CalendarTable
* left arrow, right arrow, calendar SVG icons
* NavBar

## Example

```bash
import React from 'react';
import './App.css';
import { WeeklyCalendar } from 'react-week-picker';
import 'react-week-picker/src/lib/calendar.css';

function App() {

  const handleJumpToCurrentWeek = (currenDate) => {
    console.log(`current date: ${currenDate}`);
  }

  const handleWeekPick = (startDate, endDate) => {
    console.log(`${startDate} to ${endDate}`);
  }

  return (
    <div>
      <WeeklyCalendar onWeekPick={handleWeekPick} jumpToCurrentWeekRequired={true} onJumpToCurrentWeek={handleJumpToCurrentWeek}/>
    </div>
  );
}
```

in the above example jumpToCurrentWeekRequired and onJumpToCurrentWeek are optional props.
* onWeekPick take a callbackfunction which takes week start date and week end date as parameters and will be called when the user selects any week.
* jumpToCurrentWeekRequired is an optional prop which shows or hides a jump to current week button
* The jump to current button on click will change the date to current date.
* onJumpToCurrentWeek takes a callbackfunction which takes currentDate as parameters will be called when the jump to current week button is clicked