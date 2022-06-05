'use strict'
import fs from "fs";
import path from 'path';


export const create = async () => {

  fs.access('files/fresh.txt', (error) => {
    if(!error) throw new Error('FS operation failed!');

    fs.writeFile(path.resolve('./files', 'fresh.txt'), 'I am fresh and young', (error) => {
      if(error) throw new Error('An error');
    })
});
};

create();
