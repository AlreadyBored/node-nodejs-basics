import path from "node:path";
import stream from "node:stream";

const transform = async () => {
  const fileName = "fileToRead.txt";
  const fullPath = path.join(
    process.cwd(),
    "src",
    "streams",
    "files",
    fileName
  );

  const reverse = new stream.Transform({
    transform(chunk, encoding, callback) {
      const reverseString = (str) => str.split("").reverse().join("") + "\n";
      callback(null, reverseString(chunk.toString()));
    },
  });

  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
