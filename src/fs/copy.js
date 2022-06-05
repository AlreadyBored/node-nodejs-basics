import fs from 'fs-extra';

const source = './files',
    destination = './files_copy'

export const copy = async () => {
    fs.copy(source, destination, function (err) {
        if (err){
            console.log('An error occured while copying the folder.')
            return console.error(err)
        }
        console.log('Copy completed!')
    });
};
