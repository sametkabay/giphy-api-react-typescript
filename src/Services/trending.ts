import axios from 'axios';
import TrendingDto from '../Models/trendingDto';

const trendingPath = '/v1/gifs/trending';

class TrendingService {
  static async getTrendingValue(offset: number, limit: number): Promise<TrendingDto> {
    var response = await axios.get(process.env.REACT_APP_API_URL + trendingPath, {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
        limit,
        offset,
      },
    });
    return response.data;
  }
}

export default TrendingService;
