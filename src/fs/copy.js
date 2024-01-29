import fs from 'fs/promises';
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    const srcDir = path.join(__dirname, 'files');
    const destDir = path.join(__dirname, 'files_copy');

    try {
        // Проверяем, существует ли папка 'files'
        await fs.access(srcDir);

        // Проверяем, существует ли папка 'files_copy'
        try {
            await fs.access(destDir);
            // Если папка 'files_copy' существует, выбрасываем ошибку
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code === 'ENOENT') {
                // Если 'files_copy' не существует, начинаем процесс копирования
                await copyDirectory(srcDir, destDir);
            } else {
                throw err;
            }
        }
    } catch (err) {
        // Если 'files' не существует или произошла другая ошибка
        throw new Error('FS operation failed');
    }
};

async function copyDirectory(src, dest) {
    await fs.mkdir(dest, { recursive: true });
    let entries = await fs.readdir(src, { withFileTypes: true });

    for (let entry of entries) {
        let srcPath = path.join(src, entry.name);
        let destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            await copyDirectory(srcPath, destPath);
        } else {
            await fs.copyFile(srcPath, destPath);
        }
    }
}

await copy();
