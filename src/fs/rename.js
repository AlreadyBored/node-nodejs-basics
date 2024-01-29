import fs from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = path.join(__dirname, 'files', 'properFilename.md');

    try {
        // Проверяем, существует ли файл с неправильным именем
        await fs.access(oldPath);

        // Проверяем, существует ли файл с правильным именем
        try {
            await fs.access(newPath);
            // Если файл с правильным именем существует, выбрасываем ошибку
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code === 'ENOENT') {
                // Если файл с правильным именем не существует, переименовываем
                await fs.rename(oldPath, newPath);
                console.log('File successfully renamed');
            } else {
                throw err;
            }
        }
    } catch (error) {
        // Если файл с неправильным именем не существует или произошла другая ошибка
        throw new Error('FS operation failed');
    }
};

await rename();