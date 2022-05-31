//- implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
import * as fs  from 'fs';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const write = async () => {
    const PATH_TO_FILE =  __dirname + "/files/fileToWrite.txt";
    const writeStream = fs.createWriteStream(PATH_TO_FILE);
    process.stdin.on('data', data => {
        writeStream.write(data, "utf8")
        process.exit();
    });

};

await write();