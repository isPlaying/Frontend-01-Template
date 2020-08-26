const http = require('http')
const querystring = require('querystring')
const fs = require('fs')
const archiver = require('archiver')
const child_process = require('child_process')
let packname = './package'
//fs.stat(filename, (err, stat) => {
// console.log(stat.size)


const redirect_uri = encodeURIComponent(`http://localhost:8081/auth`)
child_process.exec(`open https://github.com/login/oauth/authorize?client_id=Iv1.5fec82360fc43506&redirect_uri=${redirect_uri}&scope=read%3Auser&state=abc123`)

const server = http.createServer((request, res) => {
    console.log(`real publish`, request.url)
    let token = request.url.match(/token=([^&]+)/)[1]
    const options = {
        host: 'localhost',
        port: 8081,
        path: '/?filename=' + 'package.zip',
        method: 'POST',
        headers: {
            'token': token,
            'Content-Type': 'application/octet-stream',
        }
    }

    const req = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    })

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
        console.log('publish success')
        server.close()
        const redirect_uri = encodeURIComponent(`http://localhost:8081/auth`)
        child_process.exec(`open https://github.com/login/oauth/authorize?client_id=Iv1.5fec82360fc43506&redirect_uri=${redirect_uri}&scope=read%3Auser&state=abc123`)
    })

})


server.listen('8080')

// const req = http.request(options, (res) => {
//     console.log(`STATUS: ${res.statusCode}`);
//     console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//     // archive.pipe(req)
//     // archive.pipe(fs.createWriteStream('./package.zip'))

//     // archive.on('end', () => {
//     //     req.end()
//     // })
//     // archive.finalize()
//     // res.setEncoding('utf8');
//     // res.on('data', (chunk) => {
//     //     console.log(`BODY: ${chunk}`);
//     // });
//     // res.on('end', () => {
//     //     console.log('No more data in response.');
//     // });
// });


// // Write data to request body
// // let readStream = fs.createReadStream('./cat.jpg')
// // readStream.pipe(req)
// // readStream.on('end', () => {
// //     req.end()
// // })
//     // req.write(postData);
//     // req.end();

// //})


