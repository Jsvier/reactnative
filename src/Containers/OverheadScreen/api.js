import API from '../../Constants/api';
import { apiFetch } from '../../Lib/api';

class OverheadApi {
  static getAllOverheads() {
    return apiFetch(API.OVERHEAD.OVERHEADS);
  }

  static getSingleOverhead(query) {
    return apiFetch(API.OVERHEAD.OVERHEAD, {}, query);
  }
}

export default OverheadApi;
