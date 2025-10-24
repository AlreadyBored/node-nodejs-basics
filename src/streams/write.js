import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
    // Получаем текущую директорию файла
    const _filename = fileURLToPath(import.meta.url);
    const _dirname = dirname(_filename);

    // Формируем путь к файлу в папке files
    const filePath = join(_dirname, 'files', 'fileToWrite.txt');

    try {
        await pipeline(
            process.stdin,
            createWriteStream(filePath)
        );
        console.log(`Data successfully written to ${filePath}`);
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
};

await write();

/** КАК ЗАПУСКАТЬ СКРИПТ И ПРОВЕРЯТЬ РЕЗУЛЬТАТ
 *
 * # Ввод с клавиатуры (завершить Ctrl+D или Ctrl+C)
 * node write.js
 *
 * # Передача данных через pipe
 * echo "Hello World" | node write.js
 *
 * # Передача файла
 * cat input.txt | node write.js
 */