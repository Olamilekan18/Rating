import './App.css'
import React,{useState} from 'react';

function App() {
  // const Rating = () => {
    const [rating, setRating] = useState(0);
    const [clicked, setClicked] = useState(false);

  
    const handleMouseOver = (starValue) => {
      if(!clicked){
      setRating(starValue);
    }
  };
  
    const handleMouseLeave = () => {
      setRating(0);
    };
  
    const handleClick = (starValue) => {
      setRating(starValue);
      setClicked(true)
    };
  

  return (
    <div>
       <div className="rating" onMouseLeave={handleMouseLeave}>
      {[1, 2, 3, 4, 5].map((starValue) => (
        <span
          key={starValue}
          className={starValue <= rating ? 'star filled' : 'star'}
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
