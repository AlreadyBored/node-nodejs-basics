import fs  from 'fs';

const content = 'I am fresh and young :)'

const create = async () => {
    fs.access('./files/fresh.tsx', fs.constants.F_OK, (err) => {
        if (err) {
            return fs.writeFile('./files/fresh.tsx', content, err => {
                if (err) return console.log(err);
            })
        } else {
            console.log('File or directory exists');
        }
    });
}

await create();


//TODO: add throw

// create.js - implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder (if file already exists Error with message FS operation failed must be thrown)