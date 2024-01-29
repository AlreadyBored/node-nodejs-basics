const rename = async () => {
    const fs = require("fs");
    const path = require("path");
    fs.rename(
        path.join(__dirname, "files", "wrongFilename.txt"),
        path.join(__dirname, "files", "properFilename.md"),
        (err) => {
            if(err) throw err;
            console.log("FS operation failed");
        }
    )
};

await rename();