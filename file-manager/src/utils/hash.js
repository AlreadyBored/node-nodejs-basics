const { createHash } = await import("node:crypto");
import { createReadStream } from "node:fs";
import path from "node:path";
import { stdout as output } from "process";
import { colors } from "./colorize.js";

const hash = createHash("sha256");

export const calculateHash = async (...args) => {
  args = args.flat();
  let filePath = path.resolve(args[1]);
  try {
    const fileToRead = await createReadStream(filePath);
    fileToRead.on("error", () => console.error(colors.failed));
    await fileToRead.pipe(hash).setEncoding("hex").pipe(output);
    fileToRead.on("end", () => console.log());
  } catch (err) {
    console.error(colors.failed);
  }
};
