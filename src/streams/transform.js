import { Transform } from "stream";

const transform = async () => {
  try {
    const reversed = new Transform({
      transform(chunk, encoding, callback) {
        const reversedText = [...chunk.toString()].reverse().join("");
        this.push(reversedText);
        callback();
      },
      encoding: "utf-8",
    });

    process.stdin.pipe(reversed).pipe(process.stdout);
  } catch (error) {
    throw new Error(error);
  }
};

await transform();
