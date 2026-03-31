import './assets/App.css';
import { useState, useEffect } from 'react';
import {
  checkAuthServerStatus,
  checkDbStatus,
  checkWeatherServerStatus,
  checkSpotifyServerStatus
} from './components/apiRequests';
import {
  authURL,
  weatherClientURL,
  recipeFinderURL,
  spotifySearchURL,
  auctionAppURL,
  recipeSearchURL,
} from './lib/ulrList';
import { appList } from './components/applist';




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
      <h1>Apps Health Check</h1>

      <div className='recommendation-msg'>
        <p>The server and database are usually in sleep mode.  So, please make sure that they are active by checking status below before visiting Login Page.</p>
      </div>

      <div className="status-list-section">
        <ul>
          <li>
            <a href={authURL + '/login'} target="_blank">
              <h2 className="app-title">{appList[0].mainTitle}</h2>
              <p>Authentication Server. Once logged in, you can access sample Recipe App, Task Management App, Web Store App, Restaurant App. Some of them may take serveral minutes to wake up DBs.The auth server is built with html, css, ejs, and node.js. Other apps with the auth server built with React for clients and Node.js of servers.</p>
            </a>
            <div>
              <p className='current-status'>
                Client: ー
              </p>
              <p className="current-status">
                Server: {authServerStatus ? '🟢 Active' : '🔴 Sleep'}
              </p>
              <p className="current-status">
                DB: {dbStatus ? '🟢 Active' : '🔴 Sleep'}
              </p>
            </div>
          </li>

          <li>
            <a href={auctionAppURL} target="_blank">
              <h2 className="app-title">Auction House App (Built with Cursor)</h2>
              <p>Auction App with Next.js built with Cursor.</p>
            </a>
            <div>
              <p className='current-status'>
                App: 🟢 Active
              </p>
            </div>
          </li>

          <li>
            <a href={recipeSearchURL} target="_blank">
              <h2 className="app-title">Recipe Search App (Built with Copilot)</h2>
              <p>Recipe Search App with Next.js built with Copilot. User can search recipe by entering foods and ingredients.</p>
            </a>
            <div>
              <p className='current-status'>
                App: 🟢 Active
              </p>
            </div>
          </li>

          <li>
            <a href={weatherClientURL} target="_blank">
              <h2 className="app-title">{appList[1].mainTitle} (Built with Cursor)</h2>
              <p>Weather Report App with Next.js built by Copilot. User can search the location and check weather conditions.</p>
            </a>
            <div>
              <p className='current-status'>
                Client: ー
              </p>
              <p className="current-status">
                Server: {weatherServerStatus ? '🟢 Active' : '🔴 Sleep'}
              </p>
              <p className="current-status">
                DB: ー
              </p>
            </div>
          </li>

          <li>
            <a href={recipeFinderURL} target="_blank">
              <h2 className="app-title">{appList[2].mainTitle}</h2>
            </a>
            <div>
              <p className='current-status'>
                Client: ー
              </p>
              <p className="current-status">
                Server: 🟢 Active
              </p>
              <p className="current-status">
                DB: ー
              </p>
            </div>
          </li>

          <li>
            <a href={spotifySearchURL} target="_blank">
              <h2 className="app-title">Spotify Music Search App</h2>
              <p>Spotify Music Search App with React + Node.js. User can search for songs, albums, and artists from Spotify Database, and can access to the artist page in Spotify.</p>
            </a>
            <div>
              <p className='current-status'>
                Client: ー
              </p>
              <p className="current-status">
                Server: {checkSpotifyServerStatus ? '🟢 Active' : '🔴 Sleep'}
              </p>
              <p className="current-status">
                DB: ー
              </p>
            </div>
          </li>

        </ul>
      </div>
    </div >
  );
};

export default App;
