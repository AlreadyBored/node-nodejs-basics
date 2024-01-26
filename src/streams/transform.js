import { Transform, pipeline } from "node:stream";

const transform = async () => {
  const inverse = new Transform({
    transform(data, _encoding, callback) {
      callback(null, data.toString().split("").reverse().join(""));
    },
  });

  pipeline(process.stdin, inverse, process.stdout, (e) => console.error(e));
};

await transform();
