import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const write = async () => {
    const filePath = path.join(dirname, 'files', 'fileToWrite.txt');
    const writeStream = fs.createWriteStream(filePath, { flags: 'a' });
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    console.log('Введите текст. Для завершения нажмите 2 раза Enter:');

    for await (const line of rl) {
        if (line.trim() === '') break;
        writeStream.write(line);
    }

    writeStream.end();
    console.log('fileToWrite.txt обновился');
    rl.close();
};
write()
