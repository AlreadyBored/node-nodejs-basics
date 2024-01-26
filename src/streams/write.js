import { createWriteStream } from "fs";

const write = async () => {
  const ws = createWriteStream("./src/streams/files/fileToWrite.txt");

  process.stdin.on("data", (data) => {
    ws.write(data);
  });
};

await write();
