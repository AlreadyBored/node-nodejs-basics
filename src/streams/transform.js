import { Transform, pipeline } from "node:stream";

const transform = async () => {
  const transfromation = new Transform({
    transform(chunk, _encoding, callback) {
      const chunkStringified = chunk.toString().trim();
      const reversedChunk = chunkStringified.split("").reverse("").join("");
      callback(null, reversedChunk);
    },
  });

  pipeline(process.stdin, transfromation, process.stdout, (err) =>
    console.error(err)
  );
};

await transform();
