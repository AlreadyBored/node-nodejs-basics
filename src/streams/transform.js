import { Transform, pipeline } from "stream";

const transform = async () => {
  const reverseText = new Transform({
    transform(chunk, encoing, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });

  process.stdout.write(`Input something then close (cntrl + c).\n`);

  pipeline(process.stdin, reverseText, process.stdout, (error) => {
    if (error) throw new Error(error);
  });
};

await transform();
