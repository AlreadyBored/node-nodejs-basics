import * as fsPromise from "fs/promises";

export const rename = async () => {
  const from = "./files/wrongFilename.txt";
  const to = "./files/properFilename.md";
  const errMess = `FS operation failed`;

  try {
    try {
      await fsPromise.rename(from, to);
      const stats = await fsPromise.stat(to);
      console.log(`stats: ${JSON.stringify(stats)}`);
    } catch (error) {
      throw new Error(errMess);
    }
  } catch (err) {
    const e = err;
    console.error(e.message);
  }
};
rename();
