import * as fs from 'fs';
// import * as fs from 'fs/promises';

export const create = async () => {
    // Write your code here 

    // fs.access("fresh.txt")
    //     .then((res) => {
    //        throw new Error("FS operation failed")
    //         // console.log("erer", res)
    //     })
    //     .catch(() => {
    //         fs.appendFile('fresh.txt', "I am fresh and young")
    //             .then(() => console.log("Saved"))
    //     })


    await fs.access("fresh.txt", async (error) => {
        if (error) {
            await fs.appendFile('src/fs/files/fresh.txt', "I am fresh and young", (err) => {
                console.log('Saved!');
            });
        } else {
            throw new Error("FS operation failed")
        }
    })


};

create()

