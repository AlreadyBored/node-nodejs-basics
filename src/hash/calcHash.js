import { createReadStream } from "fs";
import { stdout } from "process";

export const calculateHash = async () => {
  const { createHash } = await import("crypto");

  const hash = createHash("sha256");

  const input = createReadStream("./files/fileToCalculateHashFor.txt");
  input.pipe(hash).setEncoding("hex").pipe(stdout);
};
calculateHash();
