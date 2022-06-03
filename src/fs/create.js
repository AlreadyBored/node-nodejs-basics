import { open, writeFile } from "node:fs/promises";
export const create = async () => {
  try {
    let file = writeFile("./files/fresh.txt", "I am fresh and young", {
      flag: "wx+",
    });
    file.catch(() => {
      throw new Error("FS operation failed");
    });
  } catch (e) {
    console.log(e);
  }
};
create();
