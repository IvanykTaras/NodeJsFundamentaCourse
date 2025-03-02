const http = require('http');
const EventEmmiter = require('events');
const Router = require('../FrameWork/Router');
const Application = require('../FrameWork/Application');
const emmiter = new EventEmmiter();
const parseJson = require('../FrameWork/parseJson');

const userRouter = require('../FrameWork/routers/user.js');


const app = new Application();
app.use(parseJson);
app.addRouter(userRouter);

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     const emit = emmiter.emit(`${req.method}:${req.url}`, req, res);
//     if(!emit){
//         res.end('404');
//     }

//     // if(req.url === '/post'){
//     //     res.write('post content <p style="color:red;">red</p>');
//     // }

//     // if(req.url === '/blog'){
//     //     res.write('blog content <p style="color:blue;">red</p>');
//     // }
//     // res.end(req.url);

//     // ===

//     //   res.writeHead(200, { 'Content-Type': 'application/json' });
//     //   res.end('{"text": "Hello, World!"}');
// });


app.listen(() => {
  console.log(`Server is running on port ${app.port}`);
});