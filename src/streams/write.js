import path from 'path';
import os from 'os';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { stdin, stdout } = process;

const writeStream = createWriteStream(path.join(__dirname, 'files/fileToWrite.txt'));


const write = async () => {
    stdout.write('Hi! Please, enter text: (you can type "exit" to exit)\n')
    stdin.on("data", (data) => {
        if (data.toString().includes('exit')) {
            stdout.write('Goodbye!' + os.EOL);
            process.exit();
        };
        writeStream.write(data);
    });
    process.on('SIGINT', () => {
        stdout.write('Goodbye!');
        process.exit();
    })};

await write();