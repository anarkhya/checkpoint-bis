import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { Link } from 'react-router-dom';
// import LeagueDetails from './LeagueDetails';

const League = (props) => {
  const { league } = props;

  // const [isDetailed, setIsDetailed] = useState(false);

  return (
    <div className="league-card">
      <img src={league.logos.dark} alt="league logo" />
      <h4>{league.name}</h4>
      <p>{league.abbr}</p>
      {/* <Link to="LeagueDetails">Voir plus</Link> */}
    </div>
  );
};

export default League;
