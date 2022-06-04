export const read = async () => {
  // Write your code here
  try {
    const fs = await import("fs/promises");
    const con = await fs.readFile("files/fileToRead.txt", "utf8");
    console.log(con);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

read();
