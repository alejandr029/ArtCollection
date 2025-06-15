import axios from "axios";
/**
 * Fetches data from the specified URL using a GET request.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<string>} - A promise that resolves to the response data as a string.
 */

export const ArtGet = async (): Promise<any> => {
    let url = 'https://api.artic.edu/api/v1/artworks'
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}


/**
 * Fetches data from the specified URL using a POST request.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<string>} - A promise that resolves to the response data as a string.
 */
export const IndividualArtGet = async (id: string): Promise<any> => {
    let url = `https://api.artic.edu/api/v1/artworks/${id}`
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}