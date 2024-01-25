import fs from "fs";
import path from "path";

const targetFileName = "fileToWrite.txt";
const targetFolderName = "files";

const currentFolder = process.cwd();

const pathToTargetFile = path.join(
  currentFolder,
  targetFolderName,
  targetFileName
);

const write = async () => {
  const writeStream = fs.createWriteStream(pathToTargetFile);

  process.stdin.on("data", (data) => {
    data = data.toString();
    writeStream.write(data);
  });
};

await write();
