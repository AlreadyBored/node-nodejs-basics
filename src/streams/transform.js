import { pipeline, Transform } from "stream";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const transform = async () => {
  // Write your code here
  const transformText = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join("") + "\n");
    },
  });
  pipeline(process.stdin, transformText, process.stdout, (err) =>
    console.error(err)
  );
};

await transform();
