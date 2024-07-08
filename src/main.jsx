import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const button_pressed = false

const GridComponent = () => {
  const handleClick = () => {
      console.log(`Button clicked`);
      // Add your desired functionality here
      Alert.alert("A button has been pressed")

  };

  return (
      <div className="grid-container">
          <button className="column1" onClick={() => handleClick()}></button>
          <button className="column1" onClick={() => handleClick()}></button>
          <button className="column1" onClick={() => handleClick()}></button>
          <button className="column2" onClick={() => handleClick()}></button>
          <button className="column2" onClick={() => handleClick()}></button>
          <button className="column2" onClick={() => handleClick()}></button>
          <button className="column3" onClick={() => handleClick()}></button>
          <button className="column3" onClick={() => handleClick()}></button>
      </div>
  );
}