import {fileURLToPath} from "url";
import path from "node:path";
import * as fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname,'files','fileToRead.txt')
    const stream = fs.createReadStream(filePath, {encoding: 'utf-8'})

    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    stream.on('end', () => {
        console.log('\nFile read complete.');
    });

    stream.on('error', (error) => {
        console.error(error.message);
    });
};

await read();
