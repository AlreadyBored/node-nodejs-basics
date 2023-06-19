import { Transform } from "stream";

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, enс, callback) {
      const reverseText = chunk.toString().split("").reverse().join("");
      callback(null, reverseText);
    },
  });

  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
