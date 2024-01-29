const create = async () => {
    const fs = require('fs')
    const path = require("path")
    const data = "I am fresh and young";
    fs.writeFile(
        path.join(__dirname, "files", "fresh.txt"), 
        data, 
        (err) => {
            if(err) throw err;
            console.log("FS operation failed");
        }
    )
};

await create();