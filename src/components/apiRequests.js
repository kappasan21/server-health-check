import axios from 'axios';
import { authURL, weatherClientURL, spotifySearchURL } from '../lib/urlList';




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


export async function checkDbStatus() {
  try {
    const dbCheck = await axios.get(authURL + '/db-connection-test');
    if (dbCheck.data) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error checking db status: ', error);
    return false;
  }
};


export async function checkWeatherServerStatus() {
  try {
    const weatherSvrCheck = await axios.get(weatherClientURL + '/test/connection');
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
    const result = await axios.get(spotifySearchURL);
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