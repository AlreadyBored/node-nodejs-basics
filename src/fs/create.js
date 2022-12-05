import { writeFile, access } from 'fs';
import { join } from 'path';

const create = async () => {
    // Write your code here 
    access('./src/fs/files/fresh.txt', function (error) {
        if (error) {
            writeFile(
                join('src', 'fs', 'files', 'fresh.txt'),
                'I am fresh and young', (err) => {
                    if (err) throw err;
                    console.log('The file was created successfuly :)')
                }
            );
        } else console.log('FS operation failed');
    })

};

await create();