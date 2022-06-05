import { pipeline } from "node:stream/promises";
import { Transform } from "node:stream";

export const transform = async () => {
  let input = process.stdin.on("data", (data) => data.toString());
  let output = process.stdout;
  const upperCaseTransform = new Transform({
    transform: async (data) => (
      null, data.toString().split("").reverse().join("")
    ),
  });
  pipeline(input, upperCaseTransform, output);
};

transform();
