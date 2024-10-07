import { access, cp } from 'fs/promises';
import { constants } from 'fs';

const copy = async () => {
    try {
        try {
            await access('./files_copy', constants.F_OK);
            console.log('FS operation failed');
          } catch (err) {
            await cp('./files', './files_copy', { recursive: true });
            console.log('Folder copied');
          }
      } catch (err) {
        console.error('FS operation failed');
      } 
};

await copy();
