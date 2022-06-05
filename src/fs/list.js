export const list = async () => {
  // Write your code here
  try {
    const fs = await import("fs/promises");
    const Filesnames = await fs.readdir("files");
    console.log("fsh: ", Filesnames);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};
