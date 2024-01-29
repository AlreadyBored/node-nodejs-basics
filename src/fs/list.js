const list = async () => {
    const fs = require("fs");
    fs.readdir("./files/", (err, files) => {
        files.forEach(file => {
            console.log(file);
        })
    })
};

await list();