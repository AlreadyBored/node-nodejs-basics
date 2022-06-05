import * as fs from 'fs';

export const read = async () => {
    // Write your code here 

    fs.readFile('src/fs/files/fileToRead.txt', (err, data) => {

        if (err) {
            throw new Error("FS operation failed")
        } else {
            // console.log(JSON.stringify(data));
            console.log(data.toString());
        }

    })

    // function bar(err, data) {
    //     /* If an error exists, show it, otherwise show the file */
    //     err ? Function("error", "throw error")(err) : console.log(JSON.stringify(data));
    // };
};

read()