import fs from "fs/promises";

const create = async () => {
  const data = "I am fresh and young";

  try {
    await fs.writeFile("src/fs/files/fresh.txt", data, { flag: "wx" });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();
