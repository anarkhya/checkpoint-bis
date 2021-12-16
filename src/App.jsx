import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Leagues from './components/Leagues';
import LeagueDetails from './components/LeagueDetails';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header sitename="soccer" />
      <Leagues />
      <BrowserRouter>
        <Routes>
          <Route path="/" component={<Leagues />} />
          <Route path="/games/:id" component={<LeagueDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
