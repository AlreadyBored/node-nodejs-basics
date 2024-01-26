import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access, constants, createWriteStream, writeFile } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    access(filePath, constants.F_OK, (err) => {
        if (err) {
            writeFile(filePath, '', (err) => {if (err) throw err;})
        }
    });

    const writeShort = createWriteStream(filePath);

    process.stdin.write("Write some text and press ENTER" + '\n');

    process.stdin.on('data', (chunk) => {
        writeShort.write(chunk);
        console.log(`Check result in => ${filePath}`);
    })
};

await write();