import fs from "node:fs/promises";

const rename = async () => {
  const from = "wrongFilename.txt";
   const to = "properFilename.md";
   try {
     await fs.access(from);
   } catch (err) {
     throw new Error("FS operation failed. there is no wrongFilename");
   }
   try {
     await fs.access(to);
     throw new Error("FS operation failed. properFilename already existed");
   } catch (err) {
     if (err.code === "ENOENT") {
       await fs.rename(from, to);
       console.log(`file ${from} renamed successfully.`);
     } else {
       throw err;
     }
   }

};

await rename();
