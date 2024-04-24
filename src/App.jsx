import './App.css'
import React,{useState} from 'react';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += letters[Math.floor(Math.random() * 16)];
  }
  return hexColor;
}

function rgbToHex(rgb) {
  return '#' + rgb.map(component => {
    const hex = component.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

function hexToRgb(hex) {
  // Remove the '#' character
  hex = hex.substring(1);
  // Parse the hex color to RGB components
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return [r, g, b];
}

function getRandomRGB() {
  return [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256)
  ];
}

function App() {
  const [hexColor, setHexColor] = useState(getRandomColor());
  const [rgbColor, setRgbColor] = useState([
    parseInt(hexColor.substring(1, 3), 16),
    parseInt(hexColor.substring(3, 5), 16),
    parseInt(hexColor.substring(5, 7), 16)
  ]);
  const [currentColor, setCurrentColor] = useState(hexColor);

  const generateRandomColor = () => {
    const randomHexColor = getRandomColor();
    setHexColor(randomHexColor);
    setRgbColor(rgbToHex(getRandomRGB()));
    const randomRgbColor = hexToRgb(randomHexColor);
    setRgbColor(randomRgbColor);

    setCurrentColor(randomHexColor);
  };

  const switchToHex = () => {
    setCurrentColor(hexColor);
  };

 
  const switchToRgb = () => {

    setCurrentColor(`rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`);
  };
  

  return (
    <div style={{ backgroundColor: currentColor, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <button onClick={generateRandomColor}>Generate Random Color</button>
        <button onClick={switchToHex}>Switch to Hex</button>
        <button onClick={switchToRgb}>Switch to RGB</button>
        <div style={{ margin: '20px', color: '#fff' }}>
          Current Color: {currentColor}
        </div>
      </div>
    </div>
  );
}

// }

export default App
