import { stdin, stdout } from "node:process";
import { Transform, pipeline } from "node:stream";

const transform = async () => {
  const trf = new Transform({
    transform(chunk, encoding, callback) {
      const chunkToStr = chunk.toString().trim();
      const reversedChunk = chunkToStr.Transformsplit("").reverse().join("");

      this.push(reversedChunk);
      callback();
    },
  });

  pipeline(stdin, trf, stdout, (err) => {
    console.log(err.message);
  });
};

await transform();
