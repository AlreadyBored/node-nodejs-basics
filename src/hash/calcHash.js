import { createReadStream } from "fs";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import crypto from "node:crypto";
import { Buffer } from "node:buffer";
import { promisify } from "util";
import { pipeline } from "stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pipelineAsync = promisify(pipeline);

const calculateHash = async () => {
  // 1 implement function that makes plain text to SHA 256
  const filePath = `${__dirname}/files/fileToCalculateHashFor.txt`;
  const hash = crypto.createHash("sha256");

  // 2 log it in  hex  with stream api
  try {
    await pipelineAsync(createReadStream(filePath), hash.setEncoding("hex"));

    hash.setEncoding("hex");

    console.log(hash.read());
  } catch (error) {
    console.error(error);
  }
};

await calculateHash();
