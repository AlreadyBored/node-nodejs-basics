export const rename = async () => {
  // Write your code here
  try {
    const fs = await import("fs/promises");
    await fs.writeFile(
      "files/properFilename.md",
      await fs.readFile("files/wrongFilename.txt"),
      { flag: "wx" }
    );
    await fs.rm("files/wrongFilename.txt");
    // await fs.rename("files/wrongFilename.txt", "files/proppeFilename.js");
  } catch (e) {
    throw new Error("FS operation failed");
  }
};
