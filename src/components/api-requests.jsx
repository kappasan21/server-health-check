import axios from 'axios';



// URLs 
const authURL = 'https://auth-server-g01-0-9.onrender.com';
const weatherSvrURL = 'https://weatherapi-svr.onrender.com';




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
}