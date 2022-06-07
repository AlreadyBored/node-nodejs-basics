import { Transform } from "stream";

export const transform = async () => {
  const readStream = process.stdin;
  const writeStream = process.stdout;

  const transformString = new Transform({
    transform(data, encoding, callback) {
      callback(data.toString().trim().split("").reverse().join(""));
    },
  });

  readStream.pipe(transformString).pipe(writeStream);
};

transform();
