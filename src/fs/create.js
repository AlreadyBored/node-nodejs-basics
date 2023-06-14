import fs, { stat } from "fs";

const fileUrl = "./src/fs/files/fresh.txt";
const checkExisting = async () => {
  stat(fileUrl, function (err) {
    if (!err) {
      throw new Error("FS operation failed");
    }
  });
};

const create = async () => {
  try {
    await checkExisting();
    fs.writeFile(fileUrl, "I am fresh and young", function (err) {
      if (err) console.log(err);
      console.log("File created!");
    });
  } catch (error) {
    console.log(error);
  }
};

await create();
