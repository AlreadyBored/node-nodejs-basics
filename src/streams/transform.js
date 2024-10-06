import { Transform } from 'stream';

// Создаем класс для преобразования текста (инверсии)
const reverseText = new Transform({
    transform(chunk, encoding, callback) {
        // Преобразуем данные в строку, разворачиваем и передаем дальше
        const reversedChunk = chunk.toString().split('').reverse().join('');
        callback(null, reversedChunk);
    }
});

// Связываем потоки: process.stdin -> reverseText -> process.stdout
process.stdin.pipe(reverseText).pipe(process.stdout);