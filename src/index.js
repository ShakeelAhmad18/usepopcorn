import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './components/StarRating';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5} message={['Tribble','Bad','Okay','Good','Amazing']}/>
    <StarRating color={'red'} size={20}/>
  </React.StrictMode>
);


