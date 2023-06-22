import fs from "fs/promises";

const write = async () => {
  const filePath = "files/fileToWrite.txt";
  try {
    const writableStream = fs.createWriteStream(filePath, { encoding: "utf8" });
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", async (data) => {
      try {
        await writableStream.write(data, "utf8");
      } catch (error) {
        console.error(`Error writing to file: ${error.message}`);
        writableStream.destroy();
        process.stdin.pause();
      }
    });
    process.stdin.on("end", async () => {
      await writableStream.end();
      console.log("File writing completed.");
    });
  } catch (error) {
    console.error(`Error creating writable stream: ${error.message}`);
  }
};

await write();
