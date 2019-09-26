import TrendingModel from '../Models/trendingModel';
import { isNullOrUndefined } from 'util';
import TrendingDto from '../Models/trendingDto';
import TrendingService from '../Services/trending';

class TrendingStore {
  static async getTrendingValue(offset: number, limit: number): Promise<TrendingModel[]> {
    const result: TrendingDto = await TrendingService.getTrendingValue(offset, limit);
    const trendingValue: TrendingModel[] = isNullOrUndefined(result)
      ? []
      : result.data.map(item => {
          return {
            type: item.type,
            slug: item.slug,
            url: item.url,
            safeUrl: item.images.original.url,
            username: item.username,
            title: item.title,
          };
        });

    return trendingValue;
  }
}

export default TrendingStore;
