import crypto from "crypto";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const calculateHash = async () => {
  const hash = crypto.createHash("sha256");
  // Script file.
  const __filename = fileURLToPath(import.meta.url);
  // Folder of script file.
  const __dirname = path.dirname(__filename);
  // Creates read stream for reading data from file.
  const readStream = fs.createReadStream(
    path.join(__dirname, "files", "fileToCalculateHashFor.txt")
  );
  // When data will be read, it will be added to hash object.
  readStream.on("data", (chunk) => {
    hash.update(chunk);
  });
  readStream.on("end", (chunk) => {
    let res = hash.digest("hex");
    //Ends work on create hash.(digest method can't be used belove)
    console.log("res", res);
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