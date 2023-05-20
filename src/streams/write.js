import { createWriteStream } from "fs";
const filePath = new URL("./files/fileToWrite.txt", import.meta.url);

const write = async () => {
  process.stdin.setEncoding("utf8");
  const myStream = createWriteStream(filePath);
  // Write your code here

  process.stdin.on("data", (data) => {
    if (data.trim() === "end") {
      process.stdin.emit("end");
    } else {
      myStream.write(`${data.trim()}\n`);
    }
  });

  process.stdin.on("end", () => {
    console.log("Reading data completed.");
    process.stdin.pause();
    myStream.end();
  });
  myStream.on("finish", () => {
    console.log("All writes are now complete.");
  });
};

await write();
