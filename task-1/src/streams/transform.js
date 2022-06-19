import { Transform, pipeline } from "stream";
import { stdin, stdout } from "process";

export const transform = async () => {
  // Write your code here

  const transformStream = new Transform({
    transform: (chunk, _encoding, callback) => {
      const result = `${chunk
        .toString()
        .trim()
        .split("")
        .reverse()
        .join("")}\n`;
      callback(null, result);
    },
  });
  pipeline(stdin, transformStream, stdout, (err) => {
    return error && console.log("transformStream error", error);
  });
};

export default (() => {
  transform();
})();
