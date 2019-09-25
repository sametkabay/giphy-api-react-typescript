import axios from 'axios';
import SearchDto from '../Models/searchDto';

const searchPath = '/v1/gifs/search';

class SearchService {
  static async getSearchValue(q: string, offset: number, limit: number): Promise<SearchDto> {
    var response = await axios.get(process.env.REACT_APP_API_URL + searchPath, {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
        q,
        limit,
        offset,
      },
    });
    console.log(response.data.data);
    return response.data;
  }
}

export default SearchService;
