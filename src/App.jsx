import { useState, useEffect } from 'react';
import './App.css'
import { checkAuthServerStatus, checkDbStatus, checkWeatherServerStatus } from './components/api-requests';



// Server URL
// const authURL = 'http://localhost:3111';
const authURL = "https://auth-server-g01-0-9.onrender.com";
const weatherClientURL = "https://weather-report-api-client.netlify.app";


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
    <div>
      <h1>Servers Health Check</h1>
      <div className='recommendation-msg'>
        <p>The server and database are usually in sleep mode.  So, please make sure that they are active by checking status below before visiting Login Page.</p>
      </div>
      <ul>
        <h2 className="app-title">App groups with Auth Server</h2>
        <li>
          <p>Authentication Server on Render: </p>
          <p className="current-status">{authServerStatus ? '🟢 Active' : '🔴 Sleep'}</p>
        </li>
        <li>
          <p>DB for Authentication Server on Supabase: </p>
          <p className="current-status">{dbStatus ? '🟢 Active' : '🔴 Sleep'}</p>
        </li>
      </ul>
      <ul>
        <a href={weatherClientURL} target="_blank"><h2 className="app-title">Weather Report App</h2></a>
        <p>Weather Report Server: </p>
        <p className="current-status">{weatherServerStatus ? '🟢 Active' : '🔴 Sleep'}</p>
      </ul>

      <a id="link-to-login" href={authURL + '/login'} target="_blank">To Login Page</a>
    </div >
  );
}

export default App
