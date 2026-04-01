import axios from 'axios';


// Update all paths for server connections and DB connections in all my servers

// Check Server status
export const checkServerStatus = async (url) => {
  console.log("Checking server status for URL:", url);
  if (!url) {
    console.warn("No URL provided for server status check.");
    return false;
  }

  try {
    const response = await axios.get(url);
    if (!response.data || response.status !== 200) {
      console.warn(`Server at ${url} is not active. Status code: ${response.data}`);
      return false;
    }
    console.log(`Server status for ${url}:`, response.data);
    // return response.status === 200;
    return true;
  } catch (error) {
    console.error(`Error checking status for ${url}:`, error);
    return false;
  }
};

// Check DB status
export const checkDbStatus = async (url) => {
  console.log("Checking DB status for URL:", url);
  if (!url) {
    console.warn("No URL provided for DB status check.");
    return false;
  }

  try {
    const response = await axios.get(url); 
    if (!response.data || response.status !== 200) {
      console.warn(`DB at ${url} is not active. Status code: ${response.data}`);
      return false;
    }
    console.log(`DB status for ${url}:`, response.data);
    // return response.status === 200;
    return true;
  } catch (error) {
    console.error(`Error checking DB status for ${url}:`, error);
    return false;
  }
};



export const checkClientStatus = async (url) => {
  console.log("Checking client status for URL:", url);
  
  if (!url) {
    console.warn("No URL provided for client status check.");
    return false;
  } 

  try {
    const response = await axios.get(url);
    console.log("Client status response for URL:", url, " : ", response);
    // if (!response || response.status !== 200) {
    if (!response) {
      console.warn(`DOWN! - Client at ${url} is not active.`);
      return false;
    } 
    console.log(`UP!!! - Client status for ${url}: `, response.status);
    // return response;
    return true;
  } catch (error) {
    console.error(`DOWN! - Error checking client status for ${url}:`, error);
    return false;
  }
};
