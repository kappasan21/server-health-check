import './assets/App.css';
import { appList } from './lib/appList';
import {
  checkClientStatus,
  checkServerStatus,
  checkDbStatus,
} from './components/api';
import { useState, useEffect, } from 'react';




function App() {
  // Assign applist to state to trigger re-render when server status is updated
  const [clientStatusList, setClientStatusList] = useState([]);
  const [serverStatuses, setServerStatuses] = useState([]);
  const [dbStatuses, setDbStatuses] = useState([]);

  useEffect(() => {
    async function checkStatuses() {
      const clientStatusResults = await Promise.all(appList.map(app => checkClientStatus(app.clientUrl)));
      const serverStatusResults = await Promise.all(appList.map(app => checkServerStatus(app.serverUrl)));
      const dbStatusResults = await Promise.all(appList.map(app => checkDbStatus(app.dbUrl)));
      console.warn("!!!!Client Status Results:", clientStatusResults);
      setClientStatusList(clientStatusResults);
      setServerStatuses(serverStatusResults);
      setDbStatuses(dbStatusResults);
    };
    checkStatuses();
    console.log("Client Status List:", clientStatusList);
    console.log("Server Status List:", serverStatuses);
    console.log("DB Status List:", dbStatuses);
  }, []);

  // JSX
  return (
    <div className="main-container">
      <h1>Apps Health Check</h1>

      <div className='recommendation-msg'>
        <p>The server and database are usually in sleep mode.  So, please make sure that they are active by checking status below before visiting Login Page.</p>
      </div>

      <div className="status-list-section">
        <ul>
          {appList.map((app, idx) => (
            <li key={idx}>
              <div className="app-header">
                <a href={app.mainUrl} target="_blank">
                  <h2 className="app-title">{app.mainTitle}</h2>
                  <h3 className="ai-dev">AI Dev Tool: {app.aiDev || 'None'}</h3>
                </a>
              </div>
              <div className="app-contents">
                <p>{app.descriptions}</p>

                <div className="app-status">
                  <p className='current-status'>
                    App/Client: {app.clientUrl === null ? 'ー None' : '🟢 Active'
                      // (clientStatusList[idx] === true ? '🟢 Active' : '🔴 Sleep')
                    }
                  </p>
                  <p className="current-status">
                    Server: {app.serverUrl === null ? 'ー None' :
                      serverStatuses[idx] === true
                        ? '🟢 Active'
                        : '🔴 Sleep'}
                  </p>
                  <p className="current-status">
                    DB: {app.dbUrl === null ? 'ー None' :
                      dbStatuses[idx] === true
                        ? '🟢 Active'
                        : '🔴 Sleep'}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
};

export default App;
