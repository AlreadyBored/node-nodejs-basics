import fs from 'fs';
import path from "path";
import url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    const fileToReadPath = path.join(__dirname, './files/fileToRead.txt')

    const readStream = await fs.createReadStream(fileToReadPath, {encoding: 'utf-8'})

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk)
    });
};

await read();