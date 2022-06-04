import { Transform } from "stream";

export const transform = async () => {
  try {
    const transformer = new Transform({
      transform(chunk, _encoding, _callback) {
        const reversedChunk = chunk
          .toString()
          .split("")
          .reverse()
          .slice(1)
          .join("");
        console.log("Развернутый ввод:", reversedChunk);
      },
    });
    console.log('Введите любой текст. Когда захотите выйти нажмите "Ctrl+C"');
    process.stdin.pipe(transformer).pipe(process.stdout);
  } catch (err) {
    console.error(err);
  }
};

transform();
