import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    try {
        const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt');
        const writeStream = fs.createWriteStream(fileToWrite);

        const print = () => process.stdout.write('Type here (use word "end" for stop): ');
        print();

        process.stdin.on('data', (text) => {
            const formattedText = String(text).trim();
            if (formattedText === 'end') {
                writeStream.end();
            } else {
                writeStream.write(formattedText);
                writeStream.write('\n');
                print();
            }
        });

        writeStream.on('finish', () => {
            process.exit();
        });

        writeStream.on('error', (error) => {
            console.log(error.message);
        });

    } catch(error) {
        throw new Error(error);
    }
};

await write();