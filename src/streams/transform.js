import { Transform } from "node:stream";
const { stdin: input, stdout: output } = process;

const reverse = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().split("").reverse().join(""));
  },
});

const transform = async () => {
  input.pipe(reverse).pipe(output);
};

await transform();
