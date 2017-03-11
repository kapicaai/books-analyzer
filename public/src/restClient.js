
var contentTypes = {
  json: 'application/json; charset=UTF-8',
  xml: 'application/xml'
};

function isSuccessful(statusCode) {
  if (statusCode < 400) {
    return true;
  }
  return false;
}

class RestClient {

  constructor(baseUrl, contentType) {
    this.baseUrl = baseUrl;
    this.contentType = contentType;
  }


  get(url, id = "") {
    var req = new XMLHttpRequest();
    req.open("GET", this.baseUrl + url + id, true);

    var promise = new Promise(function (fullfill, reject) {
      req.addEventListener("load", function () {
        if (isSuccessful(req.status))
          fullfill(req.responseText);
        else
          reject(req.status, req.statusText);
      });

      req.send();
    });
    return promise;
  }

  post(url, body) {

    var req = new XMLHttpRequest();
    req.open("POST", this.baseUrl + url, true);
    req.setRequestHeader('Content-Type', this.contentType);

    return new Promise(function (fullfill, reject) {
      req.addEventListener("load", function () {
        if (isSuccessful(req.status))
          fullfill(req.status);
        else
          reject(req.status, req.statusText);
      });

      req.send(body);
    });
  }
}

//export { contentTypes, RestClient };
