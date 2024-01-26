import { Transform, pipeline } from "stream";

const transform = async () => {
  const reverser = new Transform({
    transform(chunk, encoding, callback) {
      callback(
        null,
        chunk = chunk.toString().split('').reverse().join(''),
        callback(null, chunk)
      );
      process.exit();
    },
  });

  pipeline(process.stdin, reverser, process.stdout, (err) => {
    if (err) {
      throw new Error(err);
    }
  });
};

await transform();

// add exit from callback once the function is activated