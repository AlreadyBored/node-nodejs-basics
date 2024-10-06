import * as fs from "node:fs";
import * as path from "node:path";

const write = async () => {
  const __dirname = import.meta.dirname;

  const writableStream = fs.createWriteStream(
    path.join(__dirname, "files", "fileToWrite.txt")
  );

  await new Promise((resolve, reject) => {
    console.log(
      "Please enter data to write into the file, Ctrl+D (Unix) or Ctrl+Z (Windows) to finish"
    );
    process.stdin.pipe(writableStream);

    process.stdin.on("end", () => {
      writableStream.end();
      console.log("File write completed");
      resolve();
    });

    writableStream.on("error", (err) => {
      console.error("Error while writing file:", err);
      reject(err);
    });
  });
};

await write();
