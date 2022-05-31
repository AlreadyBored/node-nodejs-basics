//implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
import * as fs  from 'fs';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


export const read = async () => {
    const PATH_TO_FILE =  __dirname + "/files/fileToRead.txt";
    const readableStream = fs.createReadStream(PATH_TO_FILE, {encoding: "utf8"});
    for await (const chunk of readableStream) {
        process.stdout.write(chunk);
    }

};


await read();

