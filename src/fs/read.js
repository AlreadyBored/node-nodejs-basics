import fs from "fs";

export const read = async () => {
    try{
        if (!fs.existsSync('./files/fileToRead.txt')) {
            console.log('FS operation failed ' )
        } else {
            fs.readFile('./files/fileToRead.txt', (error, data) => {
                if(error) {
                    throw error;
                }
                console.log(data.toString());
            })
        }

    } catch (err) {
        console.log(err)
    }
};

