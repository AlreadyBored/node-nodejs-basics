import { writeFile } from "node:fs/promises";

const __dirname = import.meta.dirname;

const create = async () => {
  try {
    await writeFile(__dirname + "/files/fresh.txt", "I am fresh and young", {
      flag: "ax",
    });
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await create();
