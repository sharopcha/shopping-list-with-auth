import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ShoppingList />
    </div>
  );
}

export default App;
