import SearchService from '../Services/search';

class SearchStore {
  static async getSearchValue() {
    var data = await SearchService.getSearchValue();
    console.log(data);
  }
}

export default SearchStore;
