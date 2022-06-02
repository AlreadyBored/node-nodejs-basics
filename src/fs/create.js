import { appendFile, open } from "fs/promises";

const create = async () => {
  try {
    await open("./fresh.txt", "wx");
    const content = "I am fresh and young";
    await appendFile("fresh.txt", content);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};
create();
