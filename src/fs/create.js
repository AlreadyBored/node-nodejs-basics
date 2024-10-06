import fs from "fs";

const create = async () => {
  fs.access("./files/fresh.txt", fs.constants.F_OK, (error) => {
    if (error) {
      fs.appendFile(
        "./files/fresh.txt",
        "I am fresh and young",
        function (err) {
          if (err) throw err;
          console.log("Saved!");
        }
      );
      return;
    }

    throw new Error("FS operation failed");
  });
};

await create();
