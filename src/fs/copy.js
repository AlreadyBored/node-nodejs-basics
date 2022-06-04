export const copy = async () => {
  // Write your code here
  try {
    const fs = await import("fs/promises");
    // await fs.cp("files", "filesCopy");
    await fs.mkdir("files-copy");
    const fileHandle = await fs.open("files", "r");
    // const fhs = await fileHandle.stat();

    // console.log("fh", fhs.isDirectory());
    console.log("fh: ", fileHandle);
    fileHandle.close();
  } catch (e) {
    console.log("mYeRror: ", e.message);
  }
};

copy();
