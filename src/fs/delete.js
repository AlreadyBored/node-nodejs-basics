import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);

const remove = async () => {
    const filePath = path.join(dirName, 'files', 'fileToRemove.txt');

    try {
        // Проверяем существует ли файл
        await fs.access(filePath);

        // Удаляем файл
        await fs.unlink(filePath);
    } catch (error) {
        // Если файла нет или произошла к-л ошибка
        throw new Error('FS operation failed');
    }
};

await remove();