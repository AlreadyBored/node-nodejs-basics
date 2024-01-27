import { stdin, stdout } from "process";
import { Transform } from "stream";

const transform = async () => {
  const myTransform = new Transform({
    transform(chunk, _, cb) {
      const chunkString = chunk.toString().trim();

      const reversedChunkString = chunkString.split("").reverse().join("");

      this.push(reversedChunkString + "\n");

      cb();
    },
  });

  stdin.pipe(myTransform).pipe(stdout);
};

await transform();
