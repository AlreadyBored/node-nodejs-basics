import { writeFile, access } from "node:fs/promises";
import { Buffer } from "node:buffer";

const create = async () => {
  const filePath = new URL("./fresh.txt", import.meta.url);

  const createFile = async () => {
    const data = new Uint8Array(Buffer.from("I am fresh and young"));
    const promise = writeFile(filePath, data);

    await promise;
  };

  try {
    await access(filePath);
  } catch {
    return await createFile();
  }

  throw new Error("FS operation failed");
};

await create();
