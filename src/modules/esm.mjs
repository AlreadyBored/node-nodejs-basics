import { dirname, sep, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import { readFile } from 'fs/promises';
import './files/c.cjs';

const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let unknownObject;

async function loadFile(pathToFile) {
  try {
	const fullPathToFile = resolve(__dirname, pathToFile);
    const fileContent = await readFile(fullPathToFile, 'utf8');
    const json = JSON.parse(fileContent);
    return json;
  } catch (error) {
    console.error('Error loading file:', error);
    throw error;
  }
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

// Выбираем случайно JSON файл
if (random > 0.5) {
unknownObject = await loadFile('./files/a.json');
} else {
unknownObject = await loadFile('./files/b.json');
}

console.log('Loaded object:', unknownObject);

myServer.listen(PORT, () => {
console.log(`Server is listening on port ${PORT}`);
console.log('To terminate it, use Ctrl+C combination');
});

export {
  unknownObject,
  myServer,
};
