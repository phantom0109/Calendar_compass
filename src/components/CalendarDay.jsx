import React from 'react';

const CalendarDay = ({ day, onClick }) => {
  console.log(day)
  const dayClassName = `day${day.isToday ? ' today' : ''}${
    day.tours?.length > 0 ? ' available' : ''
  }`;

  return (
    <div className={dayClassName} onClick={onClick}>
      {day.date?.getDate()}
    </div>
  );
};

export default CalendarDay;
