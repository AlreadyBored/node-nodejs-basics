import { existsSync, writeFile } from "node:fs";

const create = async () => {
  const filePath = "fresh.txt";
  const content = "I am fresh and young";
  if (existsSync(filePath)) {
    throw new Error("FS operation failed");
  }
  writeFile(filePath, content, (err) => {
    console.log(err);
  });
};

await create();
