import axios from 'axios';



// URLs 
const authURL = 'https://auth-server-g01-0-9.onrender.com';
const weatherSvrURL = 'https://weatherapi-svr.onrender.com';
const spotifySvrURL = "https://spotify-search-server.onrender.com";
const restaurantSvrURL = "https://restaurant-server-gxnx.onrender.com";



export async function checkAuthServerStatus() {
  try {
    const svrCheck = await axios.get(authURL + '/server-connection-test');
    if (svrCheck.data) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error checking server status: ', error);
    return false;
  }
};

// db-check path for auth server
export async function checkDbStatus() {
  try {
    const dbCheck = await axios.get(authURL + '/db-connection-test');
    console.log("DB check response: ", dbCheck);
    const statusData = dbCheck.data.users;
    console.log("DB check response 'users' table data: ", statusData);
    // const status = dbCheck.data ? true : false;
    // return status;
    return statusData;

    // if (dbCheck.data) {
    //   return true;
    // } else {
    //   return false;
    // }
  } catch (error) {
    console.error('Error checking db status: ', error);
    return false;
  }
};
// db-check for other servers
export async function dbStatusCheck() {
  try {
    const response = await axios.get(restaurantSvrURL + '/db-check');
    if (response.data) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error('Error checking db status: ', err);
    return false;
  }
};


export async function checkWeatherServerStatus() {
  try {
    const weatherSvrCheck = await axios.get(weatherSvrURL + '/test/connection');
    if (weatherSvrCheck.data) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error checking weather server status: ', error);
    return false;
  }
};


export async function checkSpotifyServerStatus() {
  try {
    const result = await axios.get(spotifySvrURL);
    let status = false;
    console.log("Response from the server: ", result);
    if (result) {
      status = true;
    } else {
      status = false;
    }

    return status;
  } catch (error) {
    console.error("System Error while getting server status: ", error);
    return false;
  }
};