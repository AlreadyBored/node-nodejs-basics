import fs from "fs";
import readline from "readline";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const file = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const writableStream = fs.createWriteStream(file);
    writableStream.on('error', (error) => {
        console.error(error);
    });
    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt('Input:')
    rl.prompt();
    rl.on('line', (line) => {
        switch (line.trim()) {
            case 'exit':
                rl.close();
                break;
            default:
                const content = line + '\n'
                writableStream.write(content);
                rl.prompt();
                break;
        }
    }).on('close', () => {
        writableStream.end();
        console.log('\nScript stopped! See you next time!');
        process.exit(0);
    });
};

await write();