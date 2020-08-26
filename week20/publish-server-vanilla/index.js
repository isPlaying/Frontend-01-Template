const http = require('http');
const fs = require('fs')
const unzip = require('unzipper')
const https = require('https')
// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.url.match(/^\/auth/)) {
        return auth(req, res)
    }
    if (!req.url.match(/^\/?/)) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('not found');
        return;
    }
    // let matched = req.url.match(/filename=([^&]+)/)
    // let filename = matched && matched[1]
    // console.log(filename)
    // if (!filename) {
    //     return
    // }
    // console.log(req)
    // let writeStream = fs.createWriteStream('../server/public/' + filename)
    // let writeStream = fs.createWriteStream('../server/packages.package')

    const options = {
        hostname: 'api.github.com',
        port: 443,
        path: `/user`,
        method: 'GET',
        headers: {
            Authorization: `token ${req.headers.token}`,
            'User-Agent': 'toy-publish-server'
        }
    }

    const request = https.request(options, (response) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        let body = ''
        response.on('data', (d) => {
            body += d.toString()
            console.log(d)
        })
        response.on('end', (d) => {
            console.log(body)
            let user = JSON.parse(body);
            console.log(user)
            let writeStream = unzip.Extract({ path: '../server/public' })
            req.pipe(writeStream)
            req.on('end', () => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('okay');
            })
        })

        // process.stdout.write(d)
        // let result = d.toString().match(/access_token=([^&]+)/)
        // if (result) {
        //     let token = result[1]
        //     console.log(token)
        //     res.writeHead(200, { 'access_token': token, 'Content-Type': 'text/html' });
        //     res.end(`<a href="http://localhost:8080/publish?token=${token}">publish</a>`);
        // } else {
        //     res.writeHead(200, { 'Content-Type': 'text/plain' });
        //     res.end('error');
        // }

    })
    request.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    request.end()

})

//     let writeStream = unzip.Extract({ path: '../server/public' })
//     // req.pipe(writeStream)
//     req.on('data', trunk => {
//         writeStream.write(trunk)
//     })
//     req.on('end', trunk => {
//         writeStream.end(trunk)
//     })
//     req.on('end', () => {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('okay');
//     })
function auth(req, res) {
    let code = req.url.match(/code=([^&]+)/)[1]
    // console.log(code)
    // let code = 'e93256261254928c72d9'
    let state = 'abc123'
    let client_secret = '4e83806e1e599f2fe780dccf8b4e762b2892f8d5'
    let client_id = 'Iv1.5fec82360fc43506'
    let redirect_uri = encodeURIComponent(`http://localhost:8081/auth`)
    let params = `code=${code}&state=${state}&client_secret=${client_secret}&client_id=${client_id}&redirect_uri=${redirect_uri}`
    let url = `https://github.com/login/oauth/access_token?${params}`

    const options = {
        hostname: 'github.com',
        port: 443,
        path: `/login/oauth/access_token?${params}`,
        method: 'POST'
    }

    const request = https.request(options, (response) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        response.on('data', (d) => {
            // process.stdout.write(d)
            let result = d.toString().match(/access_token=([^&]+)/)
            if (result) {
                let token = result[1]
                console.log(token)
                res.writeHead(200, { 'access_token': token, 'Content-Type': 'text/html' });
                res.end(`<a href="http://localhost:8080/publish?token=${token}">publish</a>`);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('error');
            }

        })
    })
    request.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    request.end()


    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('okay');
}
server.listen(8081)
