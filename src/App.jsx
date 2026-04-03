import { useState, useEffect } from 'react';
// import './App.css'
import {
  checkAuthServerStatus,
  checkDbStatus,
  checkWeatherServerStatus,
  checkSpotifyServerStatus
} from './components/api-requests';

import styles from './App.module.css';



// Server URL
// const authURL = 'http://localhost:3111';
const authURL = "https://auth-server-g01-0-9.onrender.com";
const weatherClientURL = "https://weather-report-api-client.netlify.app";
const recipeFinderURL = "https://iridescent-chebakia-845fb8.netlify.app";
const spotifySearchURL = "https://spotify-search-client.netlify.app";
const auctionURL = "https://auction-app-m35w.vercel.app";


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
    <main>
      <h1>Servers Health Check</h1>

      <div className={styles.mainContainer}>
        <div className={styles.recommendationMsg}>
          <p>The server and database are usually in sleep mode.</p>
          <p>So, please make sure that they are active by checking status below before visiting Login Page.</p>
        </div>

        <div className="status-list-section">
          <ul>
            <li>
              <a href={authURL + '/login'} target="_blank">
                <h2 className="app-title">App group with Auth Server</h2>
              </a>
              <div>
                <p>Authentication Server on Render: </p>
                <p className="current-status">
                  {authServerStatus ? '🟢 Active' : '🔴 Sleep'}</p>
              </div>
              <div>
                <p>DB for Authentication Server on Supabase: </p>
                <p className="current-status">
                  {dbStatus ? '🟢 Active' : '🔴 Sleep'}
                </p>
              </div>
            </li>

            <li>
              <a href={auctionURL} target="_blank">
                <h2 className="app-title">Auction App Built with Cursor</h2></a>
              <div>
                <p>Auction Site built with Cursor: </p>
                <p className="current-status">
                  🟢 Active
                </p>
              </div>
            </li>

            <li>
              <a href={weatherClientURL} target="_blank">
                <h2 className="app-title">Weather Report App</h2></a>
              <div>
                <p>Weather Report Server: </p>
                <p className="current-status">
                  {weatherServerStatus ? '🟢 Active' : '🔴 Sleep'}
                </p>
              </div>
            </li>

            <li>
              <a href={recipeFinderURL} target="_blank">
                <h2 className="app-title">Recipe Finder App</h2></a>
              <div>
                <p>Recipe Finder Server: </p>
                <p className="current-status">🟢 Active</p>
              </div>
            </li>

            <li>
              <a href={spotifySearchURL} target='_blank'>
                <h2 className="app-title">Spotify Music Search App</h2>
              </a>
              <div>
                <p>Spotify Music Search Server: </p>
                <p className="current-status">
                  {checkSpotifyServerStatus ? '🟢 Active' : '🔴 Sleep'}
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* <a id="link-to-login" href={authURL + '/login'} target="_blank">To Login Page</a> */}
      </div >
    </main>
  );
};

export default App
