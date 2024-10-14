import crypto from "crypto";
import { createReadStream } from "fs";

export const hash = async (process, filePath) => {
  try {
    const hash = crypto.createHash("sha256");
    const stream = createReadStream(filePath);

    stream.on("data", (chunk) => {
      hash.update(chunk);
    });

    stream.on("end", () => {
      console.log(`Hash of file '${filePath}': ${hash.digest("hex")}`);
    });

    stream.on("error", (err) => {
      console.log("Error reading file:", err.message);
    });
  } catch (error) {
    console.log("Error calculating hash:", error.message);
  }
};
