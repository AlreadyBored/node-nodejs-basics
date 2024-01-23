import { Transform } from "stream";

const reverseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const reversedText = chunk.toString().split("").reverse().join("");
    this.push(reversedText);
    callback();
  },
});

const transform = async () => {
  // Write your code here
  try {
    for await (const chunk of process.stdin) {
      const reversedChunk = await new Promise((resolve) => {
        reverseTransform.once("data", (reversedData) => {
          resolve(reversedData);
        });
        reverseTransform.write(chunk);
        reverseTransform.end();
      });

      process.stdout.write(reversedChunk);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

await transform();
