// LandingPage.jsx  
import React, { useEffect, useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
// import './LandingPage.css'; // Import custom CSS  

const LandingPage = () => {  
  const [favorites, setFavorites] = useState([]);  
  const [error, setError] = useState(null);  
  const navigate = useNavigate();  

  useEffect(() => {  
    const fetchFavorites = async () => {  
      try {  
        const response = await fetch('/api/saved-listings');  
        if (!response.ok) {  
          throw new Error('Failed to fetch favorites');  
        }  
        const data = await response.json();  
        setFavorites(data);  
      } catch (err) {  
        setError(err.message);  
      }  
    };  

    fetchFavorites();  
  }, []);  

  if (error) return <p className="error-message">Error fetching favorites: {error}</p>;  

  return (  
    <div className="landing-page">  
      <h1 className="title">Your Favorite Listings</h1>  
      {favorites.length === 0 ? (  
        <p className="no-favorites">No favorites found.</p>  
      ) : (  
        <ul className="favorites-list">  
          {favorites.map((listing) => (  
            <li key={listing.id} className="listing-item">  
              <button className="listing-button" onClick={() => navigate(`/open-house/${listing.id}`)}>  
                {listing.address}, {listing.city}, {listing.state}  
              </button>  
            </li>  
          ))}  
        </ul>  
      )}  
    </div>  
  );  
};  

export default LandingPage;