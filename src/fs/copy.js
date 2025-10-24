import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const copy = async () => {
    import fs from 'fs/promises';
    import path from 'path';
    import { fileURLToPath } from 'url';

    const _filename = fileURLToPath(import.meta.url);
    const _dirname = path.dirname(_filename);

    const copy = async () => {
        const srcToFiles = path.join(_dirname, 'files');
        const destFilesCopy = path.join(_dirname, 'files_copy');

        try {
            // Проверка существования исходной папки
            await fs.access(srcToFiles);

            // Проверка, существует ли уже папка назначения
            try {
                await fs.access(destFilesCopy);
                throw new Error('FS operation failed');
            } catch (error) {
                // Если ошибка не связана с отсутствием папки, работаем дальше
                if (error.message === 'FS operation failed') throw error;

                // Создаем основную папку
                await fs.mkdir(destFilesCopy);

                // Рекурсия-функция для копирования
                const copyItems = async (currentSrc, currentDestination) => {
                    const items = await fs.readdir(currentSrc);

                    for (const item of items) {
                        const srcPath = path.join(currentSrc, item);
                        const destPath = path.join(currentDestination, item);
                        const stat = await fs.stat(srcPath);

                        if (stat.isFile()) {
                            // Копируем файл
                            await fs.copyFile(srcPath, destPath);
                        } else if (stat.isDirectory()) {
                            // Создаем подпапку и копируем её контент
                            await fs.mkdir(destPath);
                            await copyItems(srcPath, destPath);
                        }
                    }
                };

                // Стартуем копирование
                await copyItems(srcToFiles, destFilesCopy);
            }
        } catch (error) {
            if (error.message !== 'FS operation failed') {
                throw new Error('FS operation failed');
            }
            throw error;
        }
    }
};

await copy();