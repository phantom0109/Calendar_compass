export const getMonthYearString = (date) => {
  return date.toLocaleString('default', {month: 'long', year: 'numeric'});
};

export const generateCalendarDays = (date, availableTourDays) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const days = [];

  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push({date: null});
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayDate = new Date(year, month, day);
    const isToday = dayDate.toDateString() === new Date().toDateString();
    const tours = availableTourDays?.filter(
      (tour) => new Date(tour.date).toDateString() === dayDate.toDateString()
    );

    days.push({
      date: dayDate,
      isToday,
      tours,
    });
  }

  return days;
};
