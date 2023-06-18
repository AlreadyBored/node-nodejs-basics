import fs from "fs";

const read = async () => {
  const targetPath = new URL("./files/fileToRead.txt", import.meta.url);
  const readStream = fs.createReadStream(targetPath, "utf-8");

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on("end", () => {
    console.log("\nThe End");
  });
};

await read();
