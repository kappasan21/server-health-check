import {
  authURL,
  weatherClientURL,
  recipeFinderURL,
  spotifySearchURL, 
  auctionAppURL,
} from '../lib/urlList';


export const appList = [
  {
    id: 1,
    mainTitle: 'Auth Server App',
    mainUrl: authURL + '/login',
    clientUrl: null,
    serverUrl: authURL + '/server-connection-test',
    dbUrl: authURL + '/db-connection-test',
  },
  {
    id: 2,
    mainTitle: 'Weather Report App',
    mainUrl: weatherClientURL,
    clientUrl: weatherClientURL,
    serverUrl: 'https://weatherapi-svr.onrender.com/test/connection',
    dbUrl: null,
  },
  {
    id: 3,
    mainTitle: 'Recipe Finder App',
    mainUrl: recipeFinderURL,
    clientUrl: recipeFinderURL,
    serverUrl: 'https://recipe-finder-server.onrender.com/test/connection',
    dbUrl: null,
  },
  {
    id: 4,
    mainTitle: 'Spotify Music Search App',
    mainUrl: spotifySearchURL,
    clientUrl: null,
    serverUrl: null,
    dbUrl: null,
  },
  {
    id: 5,
    mainTitle: 'Auction House App (Built with Cursor)',
    mainUrl: auctionAppURL,
    clientUrl: null,
    serverUrl: null,
    dbUrl: null,
  }
];



