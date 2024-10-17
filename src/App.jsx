// App.jsx  
import React, { useState, useEffect } from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import LandingPage from './components/LandingPage';  
import Calendar from './components/Calendar';  
import Spinner from './components/Spinner';  

const App = () => {  
  const [loading, setLoading] = useState(true);  

  useEffect(() => {  
    setTimeout(() => {  
      setLoading(false);  
    }, 1000); // Simulate loading time  
  }, []);  

  if (loading) {  
    return <Spinner />;  
  }  

  return (  
    <Router>  
      <div className="calendar-container">  
        <Routes>  
          <Route path="/" element={<LandingPage />} />  
          <Route path="/open-house/:listingId" element={<Calendar />} />  
        </Routes>  
      </div>  
    </Router>  
  );  
};  

export default App;