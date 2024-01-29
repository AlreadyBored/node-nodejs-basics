import fs from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    try {
        // Проверяем, существует ли файл
        await fs.access(filePath);
        // Если файл существует, выбрасываем ошибку
        throw new Error('FS operation failed');
    } catch (error) {
        // Ошибка доступа к файлу, скорее всего, означает, что файл не существует
        if (error.code === 'ENOENT') {
            // Создаем файл, так как он не существует
            await fs.writeFile(filePath, 'I am fresh and young');
        } else {
            // Перебрасываем любые другие ошибки
            throw error;
        }
    }
};

await create();