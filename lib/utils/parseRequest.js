module.exports = rawRequest => {
  // parse out the request with method, path, body and split on the space

  const [method, path] = rawRequest.toString().split(' ');

  const [, bodyData] = rawRequest.toString().split('\r\n\r\n');

  if(bodyData) {

    return {
      method: method,
      path: path,
      body: bodyData
    };
  } else {
    return {
      method: method,
      path: path
    };
  }
};
