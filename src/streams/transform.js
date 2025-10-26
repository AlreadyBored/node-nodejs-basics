import { Transform } from 'node:stream';
import process from 'node:process';
const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, _, callback) {
      const reversed = chunk.toString().split("").reverse().join("");
      callback(null, reversed);
    },
  });

  console.log("Введите текст");

  process.stdin.pipe(reverseTransform).pipe(process.stdout);
};

await transform();
