export const remove = async () => {
  // Write your code here
  try {
    const fs = await import("fs/promises");
    await fs.rm("files/fileToRemove.txt");
  } catch (e) {
    throw new Error("FS operation failed");
  }
};
