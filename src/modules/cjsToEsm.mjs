import path from 'path';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { release, version } from 'os';
import { createServer } from 'http';
//
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)
//
// const random = Math.random();
// const pathString = random > 0.5 ? './src/modules/files/a.json' : './src/modules/files/b.json';
// const unknownObject = new URL(pathString, import.meta.url);
//
// console.log(`Release ${release()}`);
// console.log(`Version ${version()}`);
// console.log(`Path segment separator is "${path.sep}"`);
//
// console.log(`Path to current file is ${__filename}`);
// console.log(`Path to current directory is ${__dirname}`);
//
// const myServer = createServer((_, res) => {
//     res.end('Request accepted');
// });
//
// const PORT = 3000;
//
// console.log(unknownObject);
//
// myServer.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
//     console.log('To terminate it, use Ctrl+C combination');
// });
//
// module.exports = {
//     unknownObject,
//     myServer,
// };

(function(exports, require, module, __filename, __dirname) {

    // const __filename = fileURLToPath(import.meta.url)
    // const __dirname = dirname(__filename)
    const random = Math.random();
    const pathString = random > 0.5 ? './src/modules/files/a.json' : './src/modules/files/b.json';
    const unknownObject = new URL(pathString, import.meta.url);

    console.log(`Release ${release()}`);
    console.log(`Version ${version()}`);
    console.log(`Path segment separator is "${path.sep}"`);

    console.log(`Path to current file is ${__filename}`);
    console.log(`Path to current directory is ${__dirname}`);

    const myServer = createServer((_, res) => {
        res.end('Request accepted');
    });

    const PORT = 3000;

    console.log(unknownObject);

    myServer.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
        console.log('To terminate it, use Ctrl+C combination');
    });

    exports = {
        unknownObject,
        myServer,
    }
})();

