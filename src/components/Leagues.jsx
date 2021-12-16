/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import League from './League';

const Leagues = () => {
  const [leagues, setLeagues] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [search, setSearch] = useState('');
  console.log(search);

  useEffect(() => {
    // API request
    axios
      // get data from url
      .get('https://api-football-standings.azharimm.site/leagues')
      // extract data from response
      .then((response) => response.data)
      // update the state
      .then((data) => {
        setLeagues(data.data);
        // console.log(data);
      })
      // log errors
      .catch((error) => console.log(error));
  }, []);
  // array received?
  // console.log(leagues);

  const filteredLeagues =
    search.length === 0
      ? leagues.map((league) => <League league={league} />)
      : leagues.filter((league) =>
          league.name
            .toLowerCase()
            .includes(search.toLowerCase())
            .map(() => <League league={league} />)
        );

  /*
  function displayFilteredLeagues() {
    if (isFiltered) {
      return leagues
        .filter(function (league) {
          return league.name === 'Argentine Liga Profesional de Fútbol';
          // return league.name === { setIsUserInput };
        })
        .map(function (league) {
          return <League league={league} />;
        });
    }
    return leagues.map((league) => <League league={league} />);
  }
  */

  return (
    <div>
      <div className="league-card-container-header">
        <h2>league list</h2>
      </div>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="button" onClick={() => setIsFiltered(!isFiltered)}>
        filter
      </button>
      <div className="league-card-container">
        {/* convert array of objects into usable props */}
        {filteredLeagues}
        {/* displayFilteredLeagues() */}
      </div>
    </div>
  );
};

export default Leagues;
