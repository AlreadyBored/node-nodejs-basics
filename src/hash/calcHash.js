import { createHash } from "crypto";
import { createReadStream} from "fs";

const calculateHash = async () => {
    const path = 'src/hash/files/fileToCalculateHashFor.txt'
    const fileStream = createReadStream(path)
    const chunks = [];

    for await (const chunk of fileStream) {
      chunks.push(Buffer.from(chunk));
  }

   const str = Buffer.concat(chunks).toString("utf-8")
   console.log(createHash('sha256').update(str).digest("hex"))
};

await calculateHash();