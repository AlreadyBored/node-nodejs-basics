import stream from "stream";

const transform = async () => {
  const transformStream = new stream.Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join(''));
    },
  });

  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
