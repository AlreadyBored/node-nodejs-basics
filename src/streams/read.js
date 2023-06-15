import fs from 'fs';
import path from 'path';
import url from 'url'

const read = async () => {
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const file = path.join(__dirname, 'files', 'fileToRead.txt');
    let readableStream = fs.createReadStream(file, 'utf8');
    readableStream.on('data', function (chunk) {
      process.stdout.write(chunk);
    });
};

await read();