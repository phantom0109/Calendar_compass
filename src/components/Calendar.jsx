// Calendar.jsx  
import React, { useState, useEffect } from 'react';  
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters  
import CalendarDay from './CalendarDay';  
import EventModal from './EventModal';  
import { getMonthYearString, generateCalendarDays } from '../utils/calendarUtils';  
import Spinner from './Spinner';  

const Calendar = () => {  
  const { listingId } = useParams(); // Get the listingId from the route  
  const [availableTourDays, setAvailableTourDays] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [modalData, setModalData] = useState(null);  
  const [currentDate, setCurrentDate] = useState(new Date()); // Initialize currentDate state  

  useEffect(() => {  
    const fetchTourDays = async () => {  
      try {  
        const response = await fetch(`/api/saved-listings/${listingId}`);  
        if (!response.ok) {  
          throw new Error('Failed to fetch open house dates');  
        }  
        const data = await response.json();  
        setAvailableTourDays(data.openHouses);  
      } catch (error) {  
        console.error(error);  
      } finally {  
        setLoading(false);  
      }  
    };  

    fetchTourDays();  
  }, [listingId]);  

  const handlePrevMonth = () => {  
    const newDate = new Date(currentDate);  
    newDate.setMonth(currentDate.getMonth() - 1);  
    setCurrentDate(newDate);  
  };  

  const handleNextMonth = () => {  
    const newDate = new Date(currentDate);  
    newDate.setMonth(currentDate.getMonth() + 1);  
    setCurrentDate(newDate);  
  };  

  const handleDayClick = (dayData) => {  
    if (dayData.tours.length > 0) {  
      setModalData(dayData);  
    }  
  };  

  const handleCloseModal = () => {  
    setModalData(null);  
  };  

  const days = generateCalendarDays(currentDate, availableTourDays);  

  if (loading) return <Spinner />;  

  return (  
    <>  
      <div className="header">  
        <button onClick={handlePrevMonth} className="nav-button">  
          &lt;  
        </button>  
        <div className="month-year">{getMonthYearString(currentDate)}</div>  
        <button onClick={handleNextMonth} className="nav-button">  
          &gt;  
        </button>  
      </div>  
      <div className="calendar">  
        {days.map((day, index) => (  
          <CalendarDay  
            key={index}  
            day={day}  
            onClick={() => handleDayClick(day)}  
          />  
        ))}  
      </div>  
      {modalData && <EventModal data={modalData} onClose={handleCloseModal} />}  
    </>  
  );  
};  

export default Calendar;