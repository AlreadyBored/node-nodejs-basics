import { createWriteStream } from "fs";

const __dirname = import.meta.dirname;

const write = async () => {
  const ws = createWriteStream(__dirname + "/files/fileToWrite.txt");

  process.stdin.on("data", (data) => {
    ws.write(data);
  });
};

await write();
