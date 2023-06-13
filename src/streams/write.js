import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import { createWriteStream } from 'node:fs';

const write = async () => {
    const pathToFile = '/files/fileToWrite.txt';

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const writeStream = createWriteStream(`${__dirname}${pathToFile}`, { flags: 'a' }); // flags: 'a' - to append the file and add additional text to it
    process.stdin.on('data', (data) => {
        writeStream.write(data.toString());
    });

    console.log('Write something to your terminal and then check fileToWrite.txt ...');
};

await write();