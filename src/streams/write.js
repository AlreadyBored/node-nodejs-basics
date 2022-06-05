import fs from "fs";

export const write = async () => {
  const writeStream = fs.createWriteStream("./files/fileToWrite.txt");

  process.stdin.on("data", (data) => {
    writeStream.write(data);
    process.exit();
  });
};

write();
