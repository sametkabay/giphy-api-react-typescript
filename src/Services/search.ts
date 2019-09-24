import axios from 'axios';

const searchPath = '/v1/gifs/search';

class SearchService {
  static async getSearchValue() {
    var response = await axios.get(process.env.REACT_APP_API_URL + searchPath, {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
        q: 'umbrella',
        limit: 20,
      },
    });
    return response.data.data;
  }
}

export default SearchService;
