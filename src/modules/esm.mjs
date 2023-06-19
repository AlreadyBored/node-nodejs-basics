import path from 'path'
import { release, version } from 'os'
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import fs from "fs";

import './files/c.js'

const getRandomData = () => {
    const jsonA = fs.readFileSync('src/modules/files/a.json', 'utf8')
    const jsonB = fs.readFileSync('src/modules/files/b.json', 'utf8')
    const randomData = Math.random() > 0.5 ?  jsonA : jsonB

    console.log(randomData)
    return randomData
}

const showCommonInfo = () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    [
        `Release ${release()}`,
        `Version ${version()}`,
        `Path segment separator is "${path.sep}"`,
        `Path to current file is ${__filename}`,
        `Path to current directory is ${__dirname}`,
    ].forEach(info => {
        console.log(info);
    })
}

const setUpServer = () => {
    const PORT = 3000;

    const myServer = createServer((_, res) => {
        res.end('Request accepted');
    });

    myServer.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
        console.log('To terminate it, use Ctrl+C combination');
    });

    return myServer
}

export default {
    data: getRandomData(),
    showInfo: showCommonInfo(),
    myServer: setUpServer(),
}
