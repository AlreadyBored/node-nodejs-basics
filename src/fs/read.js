import fs from "fs";
import path from "path";

export const read = async () => {
    const __dirname = path.resolve();
    // Write your code here 
    fs.readFile(
        path.join(__dirname, 'files', 'fileToRead.txt'),
        'utf-8',
        (err, data) => {
            try {
                if (err) throw err;
                console.log(data);
            } catch (err) {
                console.log("FS operation failed");
            }
        }
    );
};

read();