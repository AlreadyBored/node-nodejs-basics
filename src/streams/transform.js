import { Transform } from 'stream';

const transform = async () => {
  try {
    // Создаем Transform Stream
    const reverseTransform = new Transform({
      transform(chunk, _, callback) {
        // Реверс данных и отправка их обратно
        const reversedChunk = chunk.toString().split('').reverse().join('');
        this.push(reversedChunk);
        callback();
      },
    });

    // Подключаем stdin к Transform Stream
    process.stdin.pipe(reverseTransform);

    // Подключаем Transform Stream к stdout
    reverseTransform.pipe(process.stdout);

    console.log('Enter text to reverse (Ctrl+C to end):');
  } catch (error) {
    console.error('Error during transformation:', error.message);
  }
};

await transform();