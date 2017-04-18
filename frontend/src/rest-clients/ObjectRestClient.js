import { baseUrl, contentTypes, RestClient } from './RestClient';

class ObjectRestClient {
  constructor(resource) {
    this.client = new RestClient(baseUrl, contentTypes.json);
    this.resource = resource;
  }


  getObject(id = "") {
    return this.client.get(this.resource, id)
    .then((json) => {
            return JSON.parse(json);
        }
    );
  }

  postObject(book) {
    return this.client.post(this.resource, JSON.stringify(book))
    .then((status) => {
      return status+"OK";
    }
    );
  }
}

export {ObjectRestClient};
