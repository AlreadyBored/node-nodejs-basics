//https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md#streams-srcstreams

import { Transform } from "node:stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, _, next) {
      const reversedData = chunk.toString().split("").reverse().join("").trim();
      process.stdout.write(`${reversedData}\n`);
      next();
    },
  });
  transformStream.on("error", console.error);

  process.stdin.on("data", (data) => {
    transformStream.write(data, "utf-8");
  });
  process.stdin.on("end", () => {
    transformStream.end();
  });
  process.stdin.on("error", console.error);
};

await transform();
