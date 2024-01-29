import fs from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    const dirPath  = path.join(__dirname, 'files');

    try {
        // Проверяем, существует ли директория
        await fs.access(dirPath);

        // Читаем содержимое директории
        const files = await fs.readdir(dirPath);

        // Выводим имена файлов
        console.log('File successfully deleted:', files);
    } catch (error) {
        // Если директория не существует, выбрасываем ошибку
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            // Перебрасываем другие ошибки
            throw error;
        }
    }
};

await list();