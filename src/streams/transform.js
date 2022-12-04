import { Transform, pipeline } from "stream";

const readable = process.stdin;
const writeable = process.stdout;

const transform = async () => {
  try {
    const transform = new Transform({
      transform(chunk, encoding, callback) {
        const chunkStringified = chunk.toString().trim();
        const reverseChunk = chunkStringified.split("").reverse().join("");
        callback(null, reverseChunk + "\n");
      },
    });

    pipeline(readable, transform, writeable, (err) =>
      console.log(`Error: ${err}`)
    );
  } catch (err) {
    console.log(err);
  }
};

await transform();