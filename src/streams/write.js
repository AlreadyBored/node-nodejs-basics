import { createWriteStream } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const write = async () => {
  const filePath = join(__dirname, "files", "fileToWrite.txt");

  const writableStream = createWriteStream(filePath);

  process.stdin.setEncoding("utf8");

  for await (const chunk of process.stdin) {
    writableStream.write(chunk);
  }

  writableStream.end();

  await new Promise((resolve) => {
    writableStream.on("finish", () => {
      console.log("Data has been written to fileToWrite.txt");
      resolve();
    });

    writableStream.on("error", (err) => {
      console.error("Error writing to fileToWrite.txt:", err);
      resolve();
    });
  });
};

await write().catch((err) => {
  console.error("Error writing to file:", err);
});
