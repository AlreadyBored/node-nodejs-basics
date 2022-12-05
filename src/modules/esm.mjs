import path from 'path';
import {release, version} from 'os';
import {createServer as createServerHttp} from 'http';
import {fileURLToPath} from 'url';
import './files/c.js';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const random = Math.random();

export async function unknownObject() {
    let unknownObject;

    if (random > 0.5) {
        const {default: unknownObject} =
            await import('./files/a.json', {
                assert: { type: 'json' }
            });
    } else {
        const {default: unknownObject} =
            await import('./files/b.json', {
                assert: { type: 'json' }
            });
    }

    console.log(unknownObject);

    return unknownObject;
}

export async function myServer() {
    console.log(`Release ${release()}`);
    console.log(`Version ${version()}`);
    console.log(`Path segment separator is "${path.sep}"`);

    console.log(`Path to current file is ${filename}`);
    console.log(`Path to current directory is ${dirname}`);

    const myServer = createServerHttp((_, res) => {
        res.end('Request accepted');
    });

    const PORT = 3000;

    myServer.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
        console.log('To terminate it, use Ctrl+C combination');
    });

    return myServer;
}

await unknownObject();
await myServer();