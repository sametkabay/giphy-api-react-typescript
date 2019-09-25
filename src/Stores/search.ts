import SearchService from '../Services/search';
import SearchModel from '../Models/searchModel';
import SearchDto from '../Models/searchDto';
import { isNullOrUndefined } from 'util';

class SearchStore {
  static async getSearchValue(q: string, offset: number, limit: number): Promise<SearchModel[]> {
    const result: SearchDto = await SearchService.getSearchValue(q, offset, limit);
    const searchValue: SearchModel[] = isNullOrUndefined(result)
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

    return searchValue;
  }
}

export default SearchStore;
