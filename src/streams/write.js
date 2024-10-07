import fs from "fs";

const write = async () => {
  const writeStream = fs.createWriteStream("./files/fileToWrite.txt", "utf8");

  process.stdin.on("data", (data) => {
    writeStream.write(data);
    process.exit();
  });
};

await write();
