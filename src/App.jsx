import { useState, useEffect } from 'react';
import './App.css'
import {
  checkAuthServerStatus,
  checkDbStatus,
  checkWeatherServerStatus,
  checkSpotifyServerStatus
} from './components/api-requests';



// Server URL
// const authURL = 'http://localhost:3111';
const authURL = "https://auth-server-g01-0-9.onrender.com";
const weatherClientURL = "https://weather-report-api-client.netlify.app";
const recipeFinderURL = "https://iridescent-chebakia-845fb8.netlify.app";
const spotifySearchURL = "https://spotify-search-client.netlify.app";



function App() {

  const [authServerStatus, setAuthServerStatus] = useState(false);
  const [dbStatus, setDbStatus] = useState(false);
  const [weatherServerStatus, setWeatherServerStatus] = useState(false);

  useEffect(() => {
    // App groups with Auth server and DB status check
    checkAuthServerStatus().then((status) => {
      setAuthServerStatus(status);
    });
    checkDbStatus().then((status) => {
      setDbStatus(status);
    });
    // Weather report app server status check
    checkWeatherServerStatus().then((status) => {
      setWeatherServerStatus(status);
    });

  }, []);

  return (
    <div className="main-container">
      <h1>Servers Health Check</h1>

      <div className='recommendation-msg'>
        <p>The server and database are usually in sleep mode.  So, please make sure that they are active by checking status below before visiting Login Page.</p>
      </div>

      <div className="status-list-section">
        <ul>
          <a href={authURL + '/login'} target="_blank">
            <h2 className="app-title">App group with Auth Server</h2>
          </a>
          <li>
            <p>Authentication Server on Render: </p>
            <p className="current-status">
              {authServerStatus ? '🟢 Active' : '🔴 Sleep'}</p>
          </li>
          <li>
            <p>DB for Authentication Server on Supabase: </p>
            <p className="current-status">
              {dbStatus ? '🟢 Active' : '🔴 Sleep'}
            </p>
          </li>
        </ul>

        <ul>
          <a href={weatherClientURL} target="_blank">
            <h2 className="app-title">Weather Report App</h2></a>
          <li>
            <p>Weather Report Server: </p>
            <p className="current-status">
              {weatherServerStatus ? '🟢 Active' : '🔴 Sleep'}
            </p>
          </li>
        </ul>

        <ul>
          <a href={recipeFinderURL} target="_blank">
            <h2 className="app-title">Recipe Finder App</h2></a>
          <li>
            <p>Recipe Finder Server: </p>
            <p className="current-status">🟢 Active</p>
          </li>
        </ul>

        <ul>
          <a href={spotifySearchURL} target='_blank'>
            <h2 className="app-title">Spotify Music Search App</h2>
          </a>
          <li>
            <p>Spotify Music Search Server: </p>
            <p className="current-status">
              {checkSpotifyServerStatus ? '🟢 Active' : '🔴 Sleep'}
            </p>
          </li>
        </ul>
      </div>

      {/* <a id="link-to-login" href={authURL + '/login'} target="_blank">To Login Page</a> */}
    </div >
  );
};

export default App
