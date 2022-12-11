import process from "process";
import { Transform } from "stream";
import { pipeline } from "stream";

const transform = async () => {
  const reversedString = (str) => str.split("").reverse().join("");
  const transformedData = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, reversedString(chunk.toString()));
    },
  });

  pipeline(process.stdin, process.stdout, (err, value) =>
    transformedData(value)
  );
};

await transform();
