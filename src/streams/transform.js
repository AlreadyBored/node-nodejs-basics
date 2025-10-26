import { Transform } from "stream";
import { stdin, stdout } from "process";

const reverseString = new Transform({
  transform(chunk, _, callback) {
    callback(null, `${String(chunk).split("").reverse().join("")}\n`);
  },
});

const transform = async () => {
  stdin.pipe(reverseString).pipe(stdout);
};

await transform();
