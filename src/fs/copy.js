import fs from "fs";
import path from "path";
const __dirname = path.resolve();

const createFolder = async () => {
    fs.mkdir(path.join(__dirname, 'files_copy'), err => {
        if (err) throw err;
        console.log('Папка была создана');
    }); 
};



export const copy = async () => {
    createFolder();
    const source = path.join(__dirname, "files");
    const destination = path.join(__dirname, "files_copy")
    fs.cp(source, destination, {recursive: true}, (err) => {
        if (err) {
          console.log("FS Operation Failed");
        } else {
          console.log("success!");
        }
      });
};

copy();



