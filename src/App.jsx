import { useState, useEffect } from 'react';
import './App.css'
import { checkAuthServerStatus, checkDbStatus } from './components/api-requests';


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
        <p>The server and database are currently in sleep mode. Please go to the login page once they are active again.</p>
      </div>
      <ul>
        <li>Authentication Server on Render: {authServerStatus ? '🟢' : '🔴'}</li>
        <li>DB for Authentication Server on Supabase: {dbStatus ? '🟢' : '🔴'}</li>
      </ul>
      <a id="link-to-login" href="https://auth-server-g01-0-9.onrender.com/login?Logged_out_successfully">To Login Page</a>
    </div>
  );
}

export default App
