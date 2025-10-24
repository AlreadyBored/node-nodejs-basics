import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import path from 'path';

const _fileName = fileURLToPath(import.meta.url);
const _dirName = path.dirname(_fileName);

const list = async () => {
    const folderPath = path.join(_dirName, 'files');

    try {
        // Проверяем существует ли папка
        await fs.access(folderPath);

        // Смотрим содержимое папки
        const files = await fs.readdir(folderPath);

        // Массив имен файлов в консоль
        console.log(files);
    } catch (error) {
        // Даем ошибку
        throw new Error('FS operation failed');
    }
};

await list();