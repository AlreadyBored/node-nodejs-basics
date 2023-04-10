import fs from "fs";

const write = async () => {
  // Write your code here
  const fileToWritePath = "src/streams/files/fileToWrite.txt";
  const writeStream = fs.createWriteStream(fileToWritePath, { flags: "w" });

  process.stdin.setEncoding("utf8");

  process.stdin.on("data", (chunk) => {
    writeStream.write(chunk);
  });

  process.stdin.on("end", () => {
    writeStream.end();
  });

  writeStream.on("finish", () => {
    console.log(`Data has been written to ${fileToWritePath}`);
  });

  writeStream.on("error", (err) => {
    console.error(`Error writing file: ${err.message}`);
  });
};

await write();
