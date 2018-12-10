//import queryString from 'query-string'
import config from '../Config'
import pallets from '../Data/pallets.json';


export function apiFetch (endpoint, options = {}, query = false) {
  /*let qs

  if (query) {
    qs = queryString.stringify(query);
  }

  const getPromise = async () => {
    try {
      const fetchOptions = apiOptions(options)
      const fetchEndpoint = apiEndpoint(endpoint, qs)
      const response = await fetch(fetchEndpoint, fetchOptions)

      return response.json()
    } catch (e) {
      throw e
    }
  };

  return getPromise();
  */
  
 /*const selectedBook = books.response.filter(book => book.id === Number(id));

 res.json({
   response: selectedBook
 });
  */
  return pallets;
}

export function apiEndpoint(endpoint, qs) {
 /* let query = '';

  if (qs) {
    query = `?${qs}`;
  }

  return `${config.api.url}${endpoint}${query}`;
  */
}

export function apiOptions(options = {}) {
  /*
  const {
    method = 'GET',
    headers = {
      'Content-Type': 'application/json'
    },
    body = false
  } = options;

  const newOptions = {
    method,
    headers,
    credentials: 'include'
  };

  if (body) {
    newOptions.body = body;
  }

  return newOptions;
  */
}
