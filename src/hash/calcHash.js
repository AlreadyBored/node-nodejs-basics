import { readFile } from "node:fs/promises";
const { createHash } = await import("node:crypto");

const calculateHash = async () => {
  const filePath = new URL(
    "./files/fileToCalculateHashFor.txt",
    import.meta.url
  );

  const content = await readFile(filePath, { encoding: "utf8" });

  console.log(createHash("sha256").update(content).digest("hex"));
};

await calculateHash();
