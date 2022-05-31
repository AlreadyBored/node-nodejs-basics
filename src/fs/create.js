import { appendFile } from "node:fs/promises";

export const create = async () => {
  try {
    await appendFile("./files/fresh.txt", "I am fresh and young", {
      flag: "x",
    });
  } catch (error) {
    console.error(`FS operation failed`);
  }
};
create();
