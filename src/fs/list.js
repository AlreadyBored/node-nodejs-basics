import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url)
        const __dirname = path.dirname(__filename)
        const pathToFile = path.join(__dirname, 'files')
        // Читаем содержимое директории асинхронно
        const files = await fs.readdir(pathToFile)
        if (files.length === 0) {
            console.log('file directory is empty')
        } else {
            console.log('files in direcory:')
            files.forEach((file) => {
                console.log(file)
            })
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('direcory does not exist')
        } else {
            throw new Error('FS operation is failed')
        }
    }
};

list();
