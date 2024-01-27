import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { fileURLToPath } from "url";
import path from "path";

const calculateHash = async () => {
  // Script file.
  const __filename = fileURLToPath(import.meta.url);
  // Folder of script file.
  const __dirname = path.dirname(__filename);
  // Creates read stream for reading data from file.
  const readStream = createReadStream(
    path.join(__dirname, "files", "fileToCalculateHashFor.txt"),
    "utf-8"
  );
  // When data will be read, it will be printed to console.
  readStream.on("data", (chunk) => {
    console.log(createHash("sha256").update(chunk).digest("hex"));
  });
  // If there will be an error, it will be printed to console.
  readStream.on("error", (error) =>
    console.log("Error in readStream:", error.message)
  );
  //For check yourself you can uncomment this 3 lines.
  //   let content = "Calculate hash for me!";
  //   const hash = createHash("sha256").update(content).digest("hex");
  //   console.log(hash);
};

await calculateHash();