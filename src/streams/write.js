import {fileURLToPath} from "url";
import path from "node:path";
import * as fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const filePath = path.join(__dirname,'files', 'fileToWrite.txt')
    const stream = fs.createWriteStream(filePath, {encoding: 'utf-8'})
    process.stdin.on('data', (chunk) => {
        stream.write(chunk);
    });

    process.stdin.on('end', () => {
        stream.end();
        console.log(`Data was written`);
    });

    process.stdin.on('error', (error) => {
        console.error(`Error reading from stdin: ${error.message}`);
    });

    stream.on('error', (error) => {
        console.error(error.message);
    });
};

await write();
