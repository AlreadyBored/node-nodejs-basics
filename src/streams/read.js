import * as fs from "node:fs";
import * as path from "node:path";

const read = async () => {
  const __dirname = import.meta.dirname;

  const readableStream = fs.createReadStream(
    path.join(__dirname, "files", "fileToRead.txt"),
    { encoding: "utf-8" }
  );

  await new Promise((resolve, reject) => {
    readableStream.pipe(process.stdout);

    readableStream.on("end", () => {
      console.log("File read completed");
      resolve();
    });

    readableStream.on("error", (err) => {
      console.error("Error while reading file:", err.message);
      reject(err);
    });
  });
};

await read();
