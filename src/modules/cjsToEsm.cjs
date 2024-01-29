import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

let unknownObject;
random > 0.5
    ? unknownObject = await import('./files/a.json', {assert: {type: "json"}})
		.then(data => data.default)
		.catch(e => console.error(e))
	: unknownObject = await import('./files/b.json', {assert: {type: "json"}})
		.then(data => data.default)
		.catch(e => console.error(e));

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

console.log("unknownObject:", unknownObject);
createMyServer.listen(3000);

module.exports = {
    unknownObject,
    myServer,
};

