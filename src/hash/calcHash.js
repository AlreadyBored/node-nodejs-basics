import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { URL, fileURLToPath } from "node:url";

const calculateHash = async () => {
  // Write your code here
  const fileUrl = new URL(
    "./files/fileToCalculateHashFor.txt",
    import.meta.url,
  );
  const filePath = fileURLToPath(fileUrl);

  const hash = createHash("sha256");

  hash.on("readable", () => {
    const data = hash.read();
    if (data) {
      console.log(data.toString("hex"));
    }
  });

  const fileStream = createReadStream(filePath);
  fileStream.pipe(hash);
};

await calculateHash();
