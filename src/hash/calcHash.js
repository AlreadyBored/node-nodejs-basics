import crypto from "crypto";
import getPath from "../helper/getPath.js";
import read from "../fs/read.js";

const calculateHash = async (filePath) => {
  const data = await read(filePath);
  const result = crypto.createHmac("sha256", data).digest("hex");

  console.log(result);
};

const hashFile = getPath(import.meta, "./files/fileToCalculateHashFor.txt");
await calculateHash(hashFile);
