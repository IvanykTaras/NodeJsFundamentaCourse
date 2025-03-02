// Readable 
// Writable
// Duplex = Readable + Writable
// Transform = Same as duplex but can transform the data as it is written or read

const fs = require('fs');
// const stream = require('stream');
const path = require('path');


// fs.readFile(path.resolve(__dirname, 'data.txt'), (err, data) => {
//     if (err) {
//         console.log(err);
//     }   
//     console.log(data);
// });


// const stream = fs.createReadStream(path.resolve(__dirname, 'data.txt'));
// stream.on('data', (chunk) => {
//     console.log(chunk);
// });

// stream.on('end', () => {
//     console.log('end read');
// });
// stream.on('open', () => {
//     console.log('open file');
// });

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'data.txt'));
// writableStream.write('Hello');
// writableStream.write('World');
// writableStream.end();


// const  http = require('http');

// http.createServer((req, res) => {
//     res.write('Hello');
//     res.write('World');
//     res.end();
// }).listen(3000);


const  http = require('http');

http.createServer((req, res) => {

    const stream = fs.createReadStream(path.resolve(__dirname, 'data.html'));
    stream.on('data', (chunk) => {
        res.write(chunk);
    });
    stream.on('end', () => {
        res.end();
    });

    // finish read file before send to client
    stream.pipe(res);
}).listen(3000);