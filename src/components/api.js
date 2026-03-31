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
    // if (response.status !== 200) {
    if (!response.ok) {
      console.warn(`Server at ${url} is not active. Status code: ${response.status}`);
      return false;
    }
    console.log(`Server status for ${url}:`, response);
    // return response.status === 200;
    return response;
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
    // if (response.status !== 200) {
    if (!response.ok) {
      console.warn(`DB at ${url} is not active. Status code: ${response.status}`);
      return false;
    }
    console.log(`DB status for ${url}:`, response.status);
    // return response.status === 200;
    return response;
  } catch (error) {
    console.error(`Error checking DB status for ${url}:`, error);
    return false;
  }
};