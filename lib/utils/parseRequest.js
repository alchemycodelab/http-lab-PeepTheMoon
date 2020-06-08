module.exports = rawRequest => {
  // parse out the request with method, path, body and split on the space

  const [method, path, , , body] = rawRequest.toString().split(' ');

  if(body.includes('\n')) {
    const bodyData = body.split('\n');
    console.log(bodyData);

    return {
      method: method,
      path: path,
      body: bodyData[2]
    };
  } else {
    return {
      method: method,
      path: path
    };
  }
};
