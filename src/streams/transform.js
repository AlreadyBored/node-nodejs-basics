import { Transform, pipeline } from "stream";
import { stdin, stdout } from "process";

const input = stdin;
const output = stdout;

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk) {
      const reversed = chunk.toString().trim().split("").reverse().join("");
      this.push(reversed + "\n");
    },
  });
  pipeline(input, transformStream, output, (err) => {
    throw new Error('Error:', err)
  });
};

await transform();
