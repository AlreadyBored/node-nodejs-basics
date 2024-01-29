const remove = async () => {
    const fs = require("fs");
    fs.unlink(
        "fileToRemove.txt", 
        (err) => {
            if(err) throw err;
            console.log("FS operation failed");
        }
    ) 
};

await remove();