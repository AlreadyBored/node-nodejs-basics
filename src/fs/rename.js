export const rename = async () => {
  // Write your code here
  const fs = await import("fs/promises");
  await fs.rename("files/wrongFilename.txt", "files/proppeFilename.js");
};
