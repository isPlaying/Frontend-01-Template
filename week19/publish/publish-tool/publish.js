const http = require('http')
const querystring = require('querystring')
const fs = require('fs')
const archiver = require('archiver')
let packname = './package'
//fs.stat(filename, (err, stat) => {
// console.log(stat.size)
const options = {
    host: 'localhost',
    port: 8081,
    path: '/?filename=' + 'package.zip',
    method: 'POST',
    headers: {
        'Content-Type': 'application/octet-stream',
    }
}




const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    // archive.pipe(req)
    // archive.pipe(fs.createWriteStream('./package.zip'))

    // archive.on('end', () => {
    //     req.end()
    // })
    // archive.finalize()
    // res.setEncoding('utf8');
    // res.on('data', (chunk) => {
    //     console.log(`BODY: ${chunk}`);
    // });
    // res.on('end', () => {
    //     console.log('No more data in response.');
    // });
});


req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

var archive = archiver('zip', {
    zlib: { level: 9 }
})

archive.directory(packname, false)

archive.finalize()

archive.pipe(req)

archive.on('end', () => {
    req.end()
})
// Write data to request body
// let readStream = fs.createReadStream('./cat.jpg')
// readStream.pipe(req)
// readStream.on('end', () => {
//     req.end()
// })
    // req.write(postData);
    // req.end();

//})


