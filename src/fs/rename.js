import fs from "fs";
import path from "node:path";

const rename = async () => {
  const oldFilePath = path.join(
    import.meta.dirname + "/files/wrongFilename.txt",
  );
  const newFilePath = path.join(
    import.meta.dirname + "/files/properFilename.md",
  );

  if (!fs.existsSync(oldFilePath) || fs.existsSync(newFilePath)) {
    throw Error("FS operation failed");
  }

  fs.renameSync(oldFilePath, newFilePath);
};

await rename();
