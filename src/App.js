import React from 'react';
import './App.css';
import Header from './components/header/header';
import User from './components/user/user'
import DailyList from './components/dailyList/dailyList';
import Cal from './components/Cal/Cal';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="contentContainer row">
        <div className="userContainer col-sm-4">
          <User />
          <Cal />
        </div>

        <div className="col-sm-8">
          <DailyList />
        </div>
      </div>
    </div>
  );
}

export default App;
