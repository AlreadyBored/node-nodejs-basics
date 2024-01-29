import fs from 'fs';

const path = "./src/fs/files/fresh.txt";
const text = "I am fresh and young";

const create = async () => {
    if(fs.existsSync(path)) {
        throw new Error("FS operation failed");
    }else {
        fs.writeFile(path, text, function(err) {
            if (err) throw err;
            console.log("File is created successfully");
        })
    }      
};

await create();
