import * as fs from 'fs';

const testFolder = './files/';

export const read = async () => {
    fs.readFile(testFolder + "fileToRead.txt", (error, data) => {
        if(error) {
            throw error;
        }
        console.log(data.toString());
    });
};
