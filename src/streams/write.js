import fs from "fs";

export const write = async () => {
  const stream = fs.createWriteStream("./files/fileToWrite.txt");
  process.stdin.on("data", (chunk) => {
    stream.write(chunk);
    process.exit();
  });
};

write();