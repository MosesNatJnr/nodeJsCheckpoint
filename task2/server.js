const http = require('http');

const server = http.createServer((request,response)=>{
    response.end('<h1>Hello Node!!!!</h1>\n');
    console.log('A new request recieved');
});
server.listen(3000,'127.0.0.1',()=>{
    console.log('server has started');
})