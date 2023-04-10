import fs from "fs";

const copy = async () => {
  const file_path = "src/fs/files";
  const copy_path = "src/fs/files_copy";
  try {
    if (!fs.existsSync(file_path)) throw new Error("FS operation failed ");
    
    fs.readdir(file_path, (err, files) => {
      if (err) throw new Error(err);

      if (!fs.existsSync(copy_path)) {
        fs.mkdirSync(copy_path);
        files.forEach((file) => {
          fs.readFile(file_path +"/" + file, "utf-8", (err, data) => {
            if (err) throw new Error(err);
            fs.writeFileSync(`${copy_path}/${file}`, data.toString(), { encoding: "utf-8" })
          });

        });
        return;
      }
      
      return console.log("FS operation failed");
    });
  } catch (error) {
    console.log(error);
  }
};

await copy();
