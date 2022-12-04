import { mkdir, readFile, writeFile } from "node:fs";
import { readdir } from "node:fs/promises";

export const copy = async () => {
    mkdir('./files_copy', () => {});

    readdir('./files', (error, files) => {
        if (error)
            console.log(error);
        else {
            console.log("\nCurrent directory filenames:");
            files.forEach(file => {
                readFile(`./files/${file}`, "utf8", (error, data) => {
                    writeFile(`./files_copy/${file}`, `${data}`, (error) => {});
                  })
            })
      }
    })

};

copy();