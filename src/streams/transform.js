import { Transform } from 'stream';

const transform = async () => {
    // Создаем Transform Stream для реверсирования текста
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            // Преобразуем chunk в строку, реверсируем и добавляем перенос строки
            const reversedText = chunk.toString().split('').reverse().join('') + '\n';
            this.push(reversedText);
            callback();
        }
    });

    return new Promise((resolve, reject) => {
        // Направляем stdin -> transform -> stdout
        process.stdin
            .pipe(reverseTransform)
            .pipe(process.stdout);

        // Обработка завершения
        process.stdin.on('end', () => {
            console.log('\nTransform completed');
            resolve();
        });

        // Обработка ошибок
        process.stdin.on('error', (error) => {
            reject(new Error(`Stdin error: ${error.message}`));
        });

        reverseTransform.on('error', (error) => {
            reject(new Error(`Transform error: ${error.message}`));
        });

        process.stdout.on('error', (error) => {
            reject(new Error(`Stdout error: ${error.message}`));
        });
    });
};

await transform();

// Как запустить скрипт и проверить результат
// Запустить
// Ввести в консоли строку для реверса
// Для завершения работы скрипта CTRL-C

