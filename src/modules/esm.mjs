import path from 'path';
import { release, version } from 'os';
import { createServer } from 'http';
import './files/c.js';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;
const loadJSON = async (filePath) => {
    try {
        const jsonData = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(jsonData);
    } catch (error) {
        console.error(`Failed to load JSON from ${filePath}: ${error.message}`);
        throw error;
    }
};

if (random > 0.5) {
    unknownObject = await loadJSON(path.resolve(__dirname, 'files', 'a.json'));
} else {
    unknownObject = await loadJSON(path.resolve(__dirname, 'files', 'b.json'));
}

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

export async function getServerAndObject() {
    return {
        unknownObject,
        myServer,
    };
}

