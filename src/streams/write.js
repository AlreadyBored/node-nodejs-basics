import fs from 'fs';
import path from 'path';
import url from 'url';
const { stdin, stdout } = process;

const write = async () => {
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const file = path.join(__dirname, 'files', 'fileToWrite.txt');
    process.on('SIGINT', () => process.exit());
    let writeableStream = fs.createWriteStream(file, {flags: 'a'});
    stdin.on('data', function(chunk) {
        writeableStream.write(chunk);
    });
    process.on('exit', () => {
        writeableStream.end();
    });
};

await write();