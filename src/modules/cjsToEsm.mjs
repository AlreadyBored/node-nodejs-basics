import fs from 'fs/promises';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import http from 'http';
import module from 'module';

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const aPath = path.resolve(__dirname, 'files/a.json');
const bPath = path.resolve(__dirname, 'files/b.json');


const a = await fs.readFile(aPath, 'utf8');
const b = await fs.readFile(bPath, 'utf8');

const aData = JSON.parse(a);
const bData = JSON.parse(b);


const random = Math.random();

let unknownObject;


if (random > 0.5) {
    unknownObject = aData;
} else {
    unknownObject = bData;
}
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const requestHandler = (request, response) => {
    const { method, url } = request;
    console.log(`Получен ${method}-запрос на ${url}`);
    response.write(JSON.stringify(unknownObject));
    response.end('Request accepted');
};

const createMyServer = http.createServer((requestHandler));
createMyServer.listen(PORT, 'localhost', () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});


module.exports = {
    unknownObject,
    createMyServer,
};