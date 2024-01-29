import fs from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    const filePath  = path.join(__dirname, 'files', 'fresh.txt');

    try {
        // Проверяем, существует ли файл
        await fs.access(filePath);

        // Удаляем файл
        await fs.unlink(filePath);
        console.log('File successfully deleted');
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

await remove();