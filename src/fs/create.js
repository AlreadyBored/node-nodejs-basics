import { checkIsFileExist, createFileWithText } from "./fileHelper.js";

const create = async () => {
  // Write your code here

  const filePath = ["files", "fresh.txt"];

  const isFileExist = await checkIsFileExist(...filePath);

  if (isFileExist) throw new Error("FS operation failed");

  try {
    const msg = await createFileWithText("I am fresh and young", ...filePath);

    console.log(msg);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();
