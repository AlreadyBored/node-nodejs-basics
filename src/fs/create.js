import fs  from 'fs';

const DIR = 'src/fs/files/fresh.txt'

const create = async () => {
    // Write your code here 
    fs.readFile(DIR, (err) => {
        if (err) {
                fs.open(DIR, 'w', (err) => {
                if (err) throw console.error(err);
                    fs.appendFile(DIR, 'I am fresh and young', (err) => {
                    if(err) throw err;
                })
            })
        } else {
        throw new Error ('FS operation failed');
        }
    })
};

await create();