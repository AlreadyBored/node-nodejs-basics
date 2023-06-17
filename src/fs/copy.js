import { promises as fsPromises } from 'fs';

const copy = async () => {
  try {
    await fsPromises.access('./files__copy');
    await fsPromises.cp('./files', './files__copy', { recursive: true });
    console.log('Directory was copied!');
   } catch (error) {
    console.error('FS operation failed');
      }
 };

 await copy();
