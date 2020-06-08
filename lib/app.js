const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data);

    if(request.path === '/') {
      const body = 'hi';
      socket.end(createResponse({ body: body}))

    } else if(request.path === '/red') {
      const body = '<h1>red</h1>';
      socket.end(createResponse({ body: body }))

    } else if(request.path === '/green') {
      const body = '<h1>green</h1>';
      socket.end(createResponse({ body: body }))

    } else if(request.path === '/blue') {
      const body = '<h1>blue</h1>';
      socket.end(createResponse({ body: body }))
    
    // else if(request.path === '/echo') {
    //   socket.end(createResponse({
    //     body: body,
    //     status: 200
    //   }))
    // }

    } else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});

module.exports = app;
