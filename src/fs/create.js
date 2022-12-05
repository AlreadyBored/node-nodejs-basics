import fs from "fs";

const create = async () => {
    fs.access("./src/fs/files/fresh.tx", (err) => {
        if (!err) throw Error("FS operation failed");
        fs.writeFile("./src/fs/files/fresh.tx", "I am fresh and young", () => {});
      });
};

await create();
