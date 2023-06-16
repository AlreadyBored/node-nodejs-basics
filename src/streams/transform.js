import { Transform } from "stream";

const transform = async () => {
  const reverseStream = new Transform({
    async transform(chunk, encoding, callback) {
      try {
        const reversedText = chunk.toString().split("").reverse().join("");
        this.push(reversedText);
        callback();
      } catch (error) {
        callback(error);
      }
    },
  });

  const promise = new Promise((resolve, reject) => {
    process.stdin
      .pipe(reverseStream)
      .pipe(process.stdout)
      .on("finish", resolve)
      .on("error", reject);
  });

  try {
    await promise;
    console.log("Transformation completed.");
  } catch (error) {
    console.error(`Error during transformation: ${error.message}`);
  }
};

await transform();
