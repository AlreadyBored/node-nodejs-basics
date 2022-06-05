import fs from "fs/promises";

export const list = async () => {
    const filesFolder = "./src/fs/files";
    try {
        const files = await fs.readdir(filesFolder);
        for (const file of files) {
            console.log(file);
        }
    } catch (error) {
        if (error.code === "ENOENT") {
            throw new Error("FS operation failed");
          } else {
              console.log(error);
          }
    }
};

list();
