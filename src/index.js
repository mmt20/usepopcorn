import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App-v2';
// import App from './App';
import './index.css';
import StarRating from './StarRating';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <App />
    {/*
    <StarRating
      maxRating={5}
      messages={['terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating size={24} color="red" className="test" defaultRating={3} />
  */}
  </React.StrictMode>
);
