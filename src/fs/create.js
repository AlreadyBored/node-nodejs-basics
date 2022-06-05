import { open,appendFile,access,constants } from 'fs';

const create = async () => {
 const file ='./files/fresh.txt';
    try {
        access(file, constants.F_OK, (err) => {
            if(err){
                open(file, 'w', (err) => {
                    if (err) throw err;
                    console.log('File created');
                    appendFile(file, 'I am fresh and young', (err) => {
                        if(err) throw err;
                        console.log('Data has been added!');
                    });
                });
            }else {
                throw new Error('FS operation failed');
            }

        });
    } catch(err) {
        console.log(err)
    }
};

export default create();