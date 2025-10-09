import { useState, useEffect } from 'react';
import './App.css'
import { checkAuthServerStatus, checkDbStatus } from './components/api-requests';



// Server URL
// const authURL = 'http://localhost:3111';
const authURL = "https://auth-server-g01-0-9.onrender.com";


function App() {

  const [authServerStatus, setAuthServerStatus] = useState(false);
  const [dbStatus, setDbStatus] = useState(false);

  useEffect(() => {
    checkAuthServerStatus().then((status) => {
      setAuthServerStatus(status);
    });
    checkDbStatus().then((status) => {
      setDbStatus(status);
    });
  }, []);

  return (
    <div>
      <h1>Servers Health Check</h1>
      <div className='recommendation-msg'>
        <p>The server and database are usually in sleep mode.  So, please make sure that they are active by checking status below before visiting Login Page.</p>
      </div>
      <ul>
        <li>
          <p>Authentication Server on Render: </p>
          <p className="current-status">{authServerStatus ? '🟢 Active' : '🔴 Sleep'}</p>
        </li>
        <li>
          <p>DB for Authentication Server on Supabase: </p>
          <p className="current-status">{dbStatus ? '🟢 Active' : '🔴 Sleep'}</p>
        </li>
      </ul>

      <a id="link-to-login" href={authURL + '/login'} target="_blank">To Login Page</a>
    </div>
  );
}

export default App
