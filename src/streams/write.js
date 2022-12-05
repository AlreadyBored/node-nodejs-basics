import path from "path";
import fs from "fs";
import process from "process";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const write = async () => {
  const filePath = path.resolve(__dirname, "./files", "fileToWrite.txt");
  const writableStream = fs.createWriteStream(filePath);

  writableStream.write("Written info to file", (error) => {
    if (error) {
      console.log("Error occured", error);
    }
  });

  writableStream.on("finish", () => {
    console.log("Wrote all data to file");
  });

  // close the stream
  writableStream.end();
};

await write();
