import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC003XUydPr0cJmLkuLXWq4fiD3_z7v3MI';

// Create New React Component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Render Component to put it's HTML into a DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
