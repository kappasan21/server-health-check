import { useState, useEffect } from 'react';
// import './App.css'
import {
  checkAuthServerStatus,
  checkDbStatus,
  checkWeatherServerStatus,
  // checkSpotifyServerStatus,
  // dbStatusCheck,
} from './components/api-requests';

import styles from './App.module.css';



// Server URL
// const authURL = 'http://localhost:3111';
const authURL = "https://auth-server-g01-0-9.onrender.com";
const weatherClientURL = "https://weather-report-api-client.netlify.app";
// const recipeFinderURL = "https://iridescent-chebakia-845fb8.netlify.app";
const recipeFinderURL = "https://quick-recipe-type2.vercel.app";
const spotifySearchURL = "https://spotify-search-client.netlify.app";
const auctionURL = "https://auction-app-m35w.vercel.app";


function App() {
  const [authServerStatus, setAuthServerStatus] = useState(false);
  const [weatherServerStatus, setWeatherServerStatus] = useState(false);
  const [detailStatus, setDetailStatus] = useState({});

  useEffect(() => {
    // App groups with Auth server and DB status check
    checkAuthServerStatus().then((status) => {
      setAuthServerStatus(status);
    });
    checkDbStatus().then((status) => {
      // setDbStatus(status);
      setDetailStatus(status);
      // console.log("DB table statuses data: ", status);
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
          <p>The servers and databases are usually in sleep mode.</p>
          <p>So, please make sure that they are active by checking status below before visiting Login Page.</p>
        </div>

        <div className={styles.statusListSection}>
          <ul>
            <li className={styles.appGroupSection}>
              <a href={authURL + '/login'} target="_blank">
                <h2 className={styles.appTitle}>App group with Auth Server</h2>
              </a>

              <div className={styles.authServerStatusSection}>
                <p>Authentication Server on Render: </p>
                <p className={styles.currentStatus}>
                  {authServerStatus ? '🟢 Active' : '🔴 Sleep'}</p>
              </div>

              <div className={styles.dbStatusSection}>
                <div>
                  <p>users table: </p>
                  <p className={styles.currentStatus}>
                    {detailStatus.users ? '🟢 Active' : '🔴 Sleep'}
                  </p>
                </div>
                <div>
                  <p>location table: </p>
                  <p className={styles.currentStatus}>
                    {detailStatus.location ? '🟢 Active' : '🔴 Sleep'}
                  </p>
                </div>
                <div>
                  <p>menu table: </p>
                  <p className={styles.currentStatus}>
                    {detailStatus.menu ? '🟢 Active' : '🔴 Sleep'}
                  </p>
                </div>
                <div>
                  <p>products table: </p>
                  <p className={styles.currentStatus}>
                    {detailStatus.products ? '🟢 Active' : '🔴 Sleep'}
                  </p>
                </div>
                <div>
                  <p>recipes table: </p>
                  <p className={styles.currentStatus}>
                    {detailStatus.recipes ? '🟢 Active' : '🔴 Sleep'}
                  </p>
                </div>
              </div>
            </li>

            <li>
              <a href={auctionURL} target="_blank">
                <h2 className={styles.appTitle}>Auction App Built with Cursor</h2></a>
              <div>
                <p>Auction Site built with Cursor: </p>
                <p className={styles.currentStatus}>
                  🟢 Active
                </p>
              </div>
            </li>

            <li>
              <a href={weatherClientURL} target="_blank">
                <h2 className={styles.appTitle}>Weather Report App</h2></a>
              <div>
                <p>Weather Report Server: </p>
                <p className={styles.currentStatus}>
                  {weatherServerStatus ? '🟢 Active' : '🔴 Sleep'}
                </p>
              </div>
            </li>

            <li>
              <a href={recipeFinderURL} target="_blank">
                <h2 className={styles.appTitle}>Recipe Finder App</h2></a>
              <div>
                <p>Recipe Finder Server: </p>
                <p className={styles.currentStatus}>🟢 Active</p>
              </div>
            </li>

            <li>
              <a href={spotifySearchURL} target='_blank' className={styles.spotifySearchLink}>
                <h2 className={styles.appTitle}>Spotify Music Search App</h2>
              </a>
              <div>
                <p>Spotify Music Search Server: </p>
                <p className={styles.currentStatus}>
                  {/* {checkSpotifyServerStatus ? '🟢 Active' : '🔴 Sleep'} */}
                  ⚫ No More API Service...
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* <a id="link-to-login" href={authURL + '/login'} target="_blank">To Login Page</a> */}
      </div >
    </main >
  );
};

export default App
