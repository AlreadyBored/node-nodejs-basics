import fs from "fs/promises";

const create = async () => {
  // Write your code here
  const fileName = "fresh.txt";
  const fileContent = "I am fresh and young";

  try {
    await fs.access("./files/" + fileName);

    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.writeFile("./files/" + fileName, fileContent);
    } else {
      throw err;
    }
  }
};

await create();
