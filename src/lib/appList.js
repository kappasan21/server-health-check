import {
  authURL,
  weatherClientURL,
  recipeFinderURL,
  spotifySearchURL, 
  auctionAppURL,
  recipeSearchURL,
} from '../lib/urlList';


export const appList = [
  {
    id: 1,
    mainTitle: 'Auth Server App',
    mainUrl: authURL,
    aiDev: null,
    descriptions: 'Authentication Server. Once logged in, you can access sample Recipe App, Task Management App, Web Store App, Restaurant App. Some of them may take serveral minutes to wake up DBs.The auth server is built with html, css, ejs, and node.js. Other apps with the auth server built with React for clients and Node.js of servers.',
    clientUrl: null,
    serverUrl: authURL + '/server-connection-test',
    dbUrl: authURL + '/db-connection-test',
  },
  {
    id: 2,
    mainTitle: 'Weather Report App',
    mainUrl: weatherClientURL,
    aiDev: 'Cursor',
    descriptions: 'Weather Report App with React and Node.js. User can search the location and check weather conditions.',
    clientUrl: weatherClientURL,
    serverUrl: 'https://weatherapi-svr.onrender.com/test/connection',
    dbUrl: null,
  },
  {
    id: 3,
    mainTitle: 'Recipe Finder App',
    mainUrl: recipeFinderURL,
    aiDev: null,
    descriptions: 'Simple Recipe Finder App with React and Node.js. User can search for recipes and ingredients by searching keywords or choosing category.',
    clientUrl: recipeFinderURL,
    serverUrl: 'https://recipe-finder-server.onrender.com/test/connection',
    dbUrl: null,
  },
  {
    id: 4,
    mainTitle: 'Spotify Music Search App',
    mainUrl: spotifySearchURL,
    aiDev: null,
    descriptions: 'Spotify Music Search App with React + Node.js. User can search for songs, albums, and artists from Spotify Database, and can access to the artist page in Spotify.',
    clientUrl: spotifySearchURL,
    serverUrl: null,
    dbUrl: null,
  },
  {
    id: 5,
    mainTitle: 'Auction House App',
    mainUrl: auctionAppURL,
    aiDev: 'Cursor',
    descriptions: 'Auction App with Next.js built with Cursor.',
    clientUrl: auctionAppURL,
    serverUrl: null,
    dbUrl: null,
  },
  {
    id: 6,
    mainTitle: 'Recipe Search App',
    mainUrl: recipeSearchURL,
    aiDev: 'Copilot',
    descriptions: 'Recipe Search App with Next.js built with Copilot. User can search recipe by entering foods and ingredients.',
    clientUrl: recipeSearchURL,
    serverUrl: null,
    dbUrl: null,
  },
];



