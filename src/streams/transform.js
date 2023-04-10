import { Transform } from "stream";

const transform = async () => {
  // Write your code here
  const reverseTransform = new Transform({
    transform(chunk, callback) {
      const reversed = chunk.toString().split("").reverse().join("");
      this.push(reversed);
      callback();
    },
  });

  process.stdin.pipe(reverseTransform).pipe(process.stdout);

  process.stdin.on("end", () => {
    console.log("Input has ended.");
  });

  process.stdin.on("error", (err) => {
    console.error(`Error reading input: ${err.message}`);
  });

  process.stdout.on("error", (err) => {
    console.error(`Error writing output: ${err.message}`);
  });
};

await transform();
