/* create.js - implement function that creates new file fresh.txt with content 
'I am fresh and young' inside of the files folder (if file already exists 
Error with message 'FS operation failed' must be thrown) */
import { existsSync, promises } from 'fs';
import { join as platform_path} from 'path';

const create = async () => {
    // Write your code here
    let fname = platform_path('files', 'fresh.txt'); //using posix or windows separator
    if (existsSync(fname)) {
        throw new Error('FS operation failed');
    } else {
        return promises.writeFile(fname, 'I am fresh and young');
    }
};

await create();
