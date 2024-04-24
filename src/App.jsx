import './App.css'
import React,{useState} from 'react';

function App() {
    const [rating, setRating] = useState(0);
  // On Click
  const handleClick = (starValue) => {
    setRating(starValue);
  };

  // On hover
  const handleMouseOver = (starValue) => {
    setRating(starValue);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((starValue) => (
        <span
          key={starValue}
          className={starValue <= rating ? 'star filled' : 'star'}
          onClick={() => handleClick(starValue)}
          onMouseOver={() => handleMouseOver(starValue)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}

 

export default App
