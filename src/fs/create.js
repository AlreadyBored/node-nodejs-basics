import fs from 'fs';

const create = async () => {
    fs.readdir("src/fs/files", (err, files) => {
        if (err)
        console.log(err);
        else {
            if(!files.includes("src/fresh.txt")){
                fs.appendFile("src/fs/files/fresh.txt" , "I am fresh and young ", (err) => {
                    if (err)
                    console.log(err);
                    console.log("File created")
                })
            }
            else {
                throw new Error("FS operation failed")
            }
        }
    })
};

await create();