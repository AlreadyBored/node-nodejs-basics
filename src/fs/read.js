import fs from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, 'files','fileToRead.txt');

    try {
        // Чтение содержимого файла
        const content = await fs.readFile(filePath, 'utf8');
        console.log(content);
    } catch (error) {
        // Если файл не существует, выбрасываем ошибку
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            // Перебрасываем другие ошибки
            throw error;
        }
    }
};

await read();