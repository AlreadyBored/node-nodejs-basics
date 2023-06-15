import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";

const transform = async () => {
  const reverser = new Transform({
    transform(chunk, _encoding, callback) {
      const reversed = reverse(chunk);
      this.push(reversed);
      callback();
    },
  });

  stdin.pipe(reverser).pipe(stdout);
};

/** returns reversed data */
const reverse = (data) => {
  return data.toString().split("").reverse().join("");
};

await transform();
