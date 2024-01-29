import {
    createServer as createServerHttp
} from 'http';
import {
    release,
    version
} from 'os';
import path from 'path';
import './files/c';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
	import('./files/a.json').then(module => {
		unknownObject = module.default;
		console.log(unknownObject);
	});
} else {
	import('./files/b.json').then(module => {
		unknownObject = module.default;
		console.log(unknownObject);
	});
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${new URL('.', import.meta.url).pathname}`);

const myServer = createServerHttp((_, res) => {
	res.end('Request accepted');
});

const PORT = 3000;

myServer.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
	console.log(`To terminate it, use Ctrl+C combination`);
});

export {
    myServer,
    unknownObject
};
