import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const write = async () => {
    // Write your code here 
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const ws = createWriteStream(__dirname + '/files/fileToWrite.txt', { encoding: 'utf-8' });
    process.stdin.on('data', (data) => {
        ws.write(data.toString());
    })

    console.log(`You can write anything it can be written in file! \n`)
};

await write();