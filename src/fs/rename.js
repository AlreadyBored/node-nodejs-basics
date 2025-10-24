import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const wrongFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const properFilePath = path.join(__dirname, 'files', 'wrongFileName.md');

    try {
        // Проверяем существование исходного файла
        await fs.access(wrongFilePath);

        // Проверяем, не существует ли уже целевой файл
        try {
            await fs.access(properFilePath);
            throw new Error('FS operation failed');
        } catch (error) {
            // Если ошибка не связана с отсутствием файла, пробрасываем дальше
            if (error.message === 'FS operation failed') throw error;

            // Переименовываем файл
            await fs.rename(wrongFilePath, properFilePath);
        }
    } catch (error) {
        if (error.message !== 'FS operation failed') {
            throw new Error('FS operation failed');
        }
        throw error;
    }
};

await rename();