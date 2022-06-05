export const create = async () => {
  // Write your code here
  try {
    const fs = await import("fs/promises");
    await fs.writeFile("./files/fresh.txt", "I am fresh and young", {
      flag: "wx",
    });
  } catch (e) {
    throw new Error("FS operation failed");
  }
};
