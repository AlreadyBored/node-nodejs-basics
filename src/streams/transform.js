import { Transform, pipeline } from "stream";

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, _encoding, callback) {
      callback(
        null,
        `${chunk.toString().trim().split("").reverse().join("")}\n`
      );
    },
  });

  pipeline(process.stdin, reverse, process.stdout, (err) => {
    console.error(err);
    process.exitCode = 1;
  });
};

await transform();
