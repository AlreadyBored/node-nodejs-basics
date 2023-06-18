import fs from "fs";

const remove = async () => {
  const filePath = new URL("./files/fileToRemove.txt", import.meta.url);

  fs.unlink(filePath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    console.log("File deleted successfully!");
  });
};

await remove();
