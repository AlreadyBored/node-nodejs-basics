const copy = async () => {
    const fs = require("fs");
    const path  = require("path");
    fs.copyFile(
        "files",
        path.join(__dirname, "fs", "files_copy"),
        (err) => {
            if(err) throw err;
            console.log("FS operation failed");
        }
    )
};

await copy();
