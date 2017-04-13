import { baseUrl, resources, contentTypes, RestClient } from './RestClient';

class BookClient {
  constructor() {
    this.client = new RestClient(baseUrl, contentTypes.json);
    this.resource = resources.book;
  }


  getBook(id = "") {
    return this.client.get(this.resource, id)
    .then((json) => {
            return JSON.parse(json);
        }
    );
  }

  postBook(book) {
    return this.client.post(this.resource, JSON.stringify(book))
    .then((status) => {
      return status+"OK";
    }
    );
  }
}

export {BookClient};
