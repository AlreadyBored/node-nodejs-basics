import fs from "fs";
import path from "path";

const targetFileName = "fileToRead.txt";
const targetFolderName = "files";

const currentFolder = process.cwd();

const pathToTargetFile = path.join(
  currentFolder,
  targetFolderName,
  targetFileName
);

const read = async () => {
  const readStream = fs.createReadStream(pathToTargetFile);

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on("end", () => {
    console.log("");
  });
};

await read();
