import fs from 'fs'

const folder = "./src/fs/files/";
const filename = "fresh.txt";
const content = "I am fresh and young";

const create = async () => {
    fs.open(folder + filename, "wx", (err, descriptor) => {                  // wx flag creates and opens, throws an error if exist
        if (err) {
            console.log("FS operation failed", err);
        } else {
           //console.log(descriptor);
            fs.write(descriptor, content, (err, bytes) => {          
                if (err) {
                    console.error("FS operation failed", err);
                } else {
                    console.log("File created");
                }
            })
        }
    })
};

await create();