import fs from "fs";
import path from "node:path";

const create = async () => {
  const content = "I am fresh and young";
  const filePath = path.join(import.meta.dirname + "/files/fresh.txt");

  if (fs.existsSync(filePath)) {
    throw Error("FS operation failed");
  }

  try {
    fs.writeFileSync(filePath, content, { flag: "w+" });
  } catch (err) {
    throw Error("FS operation failed");
  }
};

await create();
