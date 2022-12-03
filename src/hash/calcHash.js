import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";

const calculateHash = async () => {
  const filePath = new URL(
    "./files/fileToCalculateHashFor.txt",
    import.meta.url
  );
  const hash = createHash("sha256");
  const input = createReadStream(filePath);
  input.on("readable", () => {
    const data = input.read();

    if (data) {
      hash.update(data);
    } else {
      console.log(hash.digest("hex"));
    }
  });
};

await calculateHash();
