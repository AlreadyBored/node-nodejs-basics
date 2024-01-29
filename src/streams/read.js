import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const read = async () => {
    // Создаем путь к файлу
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    // Создаем поток для чтения
    const readStream = fs.createReadStream(filePath);

    // Перенаправляем данные из файла в стандартный вывод
    readStream.pipe(process.stdout);

    // Обработка ошибок
    readStream.on('error', (error) => {
        console.error(`An error occurred: ${error.message}`);
    });
};

await read();