import fs from 'fs';


const content = 'I am fresh and young'


export const create = async () => {

    try {
         if (fs.existsSync('./files/fresh.txt')) {
            console.log('FS operation failed ' )
        } else {
            fs.writeFileSync('./files/fresh.txt', content)
             console.log('success')
        }


    } catch (err) {
      console.log(err)
    }
};



