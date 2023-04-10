import fs from "fs";

const create = async () => {
  const file_path = "src/fs/files";

  if (!fs.existsSync(`${file_path}/fresh.txt`)) {
    fs.writeFileSync(`${file_path}/fresh.txt`, "I am fresh and young", {encoding: "utf-8"});
    return;
  }

  return console.log("FS operation failed");
};

await create();
