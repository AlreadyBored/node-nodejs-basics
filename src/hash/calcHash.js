import { createHash } from "crypto";
import { createReadStream } from "fs";

const __dirname = import.meta.dirname;

const calculateHash = async () => {
  let content = "";
  const rs = createReadStream(__dirname + "/files/fileToCalculateHashFor.txt");

  rs.on("data", (data) => {
    content += data.toString();
  });

  rs.on("end", () => {
    const hashSum = createHash("sha256");
    hashSum.update(content);
    const hex = hashSum.digest("hex");

    process.stdout.write(`${hex}\n`);
  });
};

await calculateHash();
