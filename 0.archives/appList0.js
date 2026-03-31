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
    mainUrl: authURL + '/login',
    desc: "Authentication Server. Once logged in, you can access sample Recipe App, Task Management App, Web Store App, Restaurant App. Some of them may take serveral minutes to wake up DBs.The auth server is built with html, css, ejs, and node.js. Other apps with the auth server built with React for clients and Node.js of servers.",
    clientUrl: null,
    serverUrl: authURL + '/server-connection-test',
    dbUrl: authURL + '/db-connection-test',
  },
  {
    id: 2,
    mainTitle: 'Weather Report App',
    mainUrl: weatherClientURL,
    desc: "Weather Report App with Next.js built by Cursor. User can search the location and check weather conditions.",
    clientUrl: weatherClientURL,
    serverUrl: 'https://weatherapi-svr.onrender.com/test/connection',
    dbUrl: null,
  },
  {
    id: 3,
    mainTitle: 'Recipe Finder App',
    mainUrl: recipeFinderURL,
    desc: "Simple Recipe Finder App with React and Node.js. User can search for recipes and ingredients by searching keywords or choosing category.",
    clientUrl: recipeFinderURL,
    serverUrl: 'https://recipe-finder-server.onrender.com/test/connection',
    dbUrl: null,
  },
  {
    id: 4,
    mainTitle: 'Spotify Music Search App',
    mainUrl: spotifySearchURL,
    desc: "Spotify Music Search App with React + Node.js. User can search for songs, albums, and artists from Spotify Database, and can access to the artist page in Spotify.",
    clientUrl: null,
    serverUrl: null,
    dbUrl: null,
  },
  {
    id: 5,
    mainTitle: 'Auction House App (Built with Cursor)',
    mainUrl: auctionAppURL,
    desc: "Auction App with Next.js built with Cursor.",
    clientUrl: null,
    serverUrl: null,
    dbUrl: null,
  },
    {
    id: 6,
    mainTitle: 'Recipe Search App (Built with Copilot)',
    mainUrl: recipeSearchURL,
    desc: "Recipe Search App with Next.js built with Copilot. User can search recipe by entering foods and ingredients.",
    clientUrl: null,
    serverUrl: null,
    dbUrl: null,
  },
];



