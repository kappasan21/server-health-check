import './assets/App.css';
import { appList } from './lib/appList';
import {
  checkServerStatus,
  checkDbStatus,
} from './components/api';



function App() {

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
                    App/Client: {app.clientUrl
                      ? '🟢 Active'
                      : 'ー None'}
                  </p>
                  <p className="current-status">
                    Server: {app.serverUrl === null ? 'ー None' :
                      checkServerStatus(app.serverUrl) === true
                        ? '🟢 Active'
                        : '🔴 Sleep'}
                  </p>
                  <p className="current-status">
                    DB: {app.dbUrl === null ? 'ー None' :
                      checkDbStatus(app.dbUrl) === true
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
