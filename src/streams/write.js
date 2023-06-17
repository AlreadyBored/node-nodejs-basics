import { createWriteStream } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdin, stdout } from 'process';

const write = () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt')

    const writeableStream = createWriteStream(pathToFile);

    stdout.write('Введите данные для записи в файл. Для выхода Ctrl + C.\n');
    stdin.pipe(writeableStream);
};

write();
