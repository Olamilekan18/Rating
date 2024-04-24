import './App.css'
import React,{useState} from 'react';

function App() {
  // const Rating = () => {
    const [rating, setRating] = useState(0);
    const [clicked, setClicked] = useState(false);

  
    const handleMouseOver = (starValue) => {
      if (!clicked) {
        setRating(starValue);
      }
  };
  
    const handleMouseLeave = () => {
      if (!clicked) {
        setRating(0);
      }
    };
  
    const handleClick = (starValue) => {
      setClicked(true)
      setRating(starValue);
    };
  

  return (
    <div>
       <div className="rating" onMouseLeave={handleMouseLeave}>
      {[1, 2, 3, 4, 5].map((starValue) => (
        <span
          key={starValue}
          className={clicked || starValue <= rating ? 'star filled' : 'star'}
          onMouseOver={() => handleMouseOver(starValue)}
          onClick={() => handleClick(starValue)}
        >
          &#9733;
        </span>
      ))}
    </div>
    </div>
  );
}

 

export default App
