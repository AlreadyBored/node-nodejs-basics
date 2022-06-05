import fs from "fs";
import path from "path";

export const list = async () => {
    const __dirname = path.resolve('files');
    // Write your code here 
    fs.readdir(
        __dirname,
        (err, files) => {
            try {
                if (err) throw err;
                for (let file of files) {
                    console.log(file);
                };
            } catch (err) {
                console.log("FS operation failed");
            }
        }
    );
};

list();