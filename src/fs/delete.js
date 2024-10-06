import fs from "fs";
const remove = async () => {
  fs.access("./files/fileToRemove.txt", (error) => {
    if (error) {
      // fileToRemove does not exist.
      throw new Error("FS operation failed");
    }
    fs.unlink("./files/fileToRemove.txt", (err) => {
      if (err) {
        console.error(`Error removing file: ${err}`);
        return;
      }

      console.log(`successfully removed.`);
    });
  });
};

await remove();
