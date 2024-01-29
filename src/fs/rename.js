import fs from 'fs';

const filePath = "./src/fs/files/";

const rename = async () => {
    if (!fs.existsSync(filePath + "wrongFilename.txt") || fs.existsSync(filePath + "properFilename.md")) {
        throw new Error("FS operation failed");
    }else {
        fs.rename(filePath + "wrongFilename.txt", 
                  filePath + "properFilename.md",
                  function(err) {
                    if (err) throw err;
                    console.log("Done!!!");
                });
    }
};

await rename();
