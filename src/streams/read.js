import { createReadStream } from "fs";
import { join, dirname } from "path";

const read = async () => {
  const currDir = dirname(new URL(import.meta.url).pathname).replace(
    /^\/([A-Za-z]:)/,
    "$1"
  );
  const filePath = join(currDir, "files", "fileToREad.txt");

  try {
    const read = createReadStream(filePath, { encoding: "utf8" });
    for await (const chunk of read) {
      process.stdout.write(chunk);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }

  process.stdout.write("\n");
  // Write your code here
};

await read();
