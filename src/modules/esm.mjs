import path from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { createRequire } from 'module';
import { pathToFileURL } from 'url';

const require = createRequire(import.meta.url); // для імпорту .cjs файлів
require('./files/c.cjs'); // правильно підключаємо c.cjs файл

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

try {
    const fileName = random > 0.5 ? 'a.json' : 'b.json';
    const filePath = path.join(__dirname, 'files', fileName);
    const fileUrl = pathToFileURL(filePath);
  
    unknownObject = await import(fileUrl.href, {
      with: { type: 'json' }
    });
} catch (error) {
  console.error('Error loading JSON file:', error);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log('Loaded JSON data:', unknownObject?.default || 'No data loaded');

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C');
});

export { unknownObject, myServer };
