import { resolve } from 'path';
import { access, constants, unlink, rename } from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';

export const add = async (file) => {
  const fullFileName = resolve(file);
  try {
    await access(file, constants.R_OK | constants.W_OK);
    console.log(`\x1b[31m%s\x1b[0m`, 'Operation Failed: ', `File ${file} exists`);
  } catch (e) {
    if (e.code === 'ENOENT') {
      const writeStream = createWriteStream(file);
      writeStream.close();
      console.log('File successfully added');
    }
  }
};

export const cat = async (file) => {
  try {
    const fullFileName = resolve(file);
    const fileStream = createReadStream(fullFileName);

    await new Promise((res, rej) => {
      fileStream.on('data', (data) => {
        process.stdout.write(data + '\n');
      });
      fileStream.on('end', res);
      fileStream.on('error', rej);
    });
  } catch (e) {
    if (e.code === 'ENOENT')
      console.log('\x1b[31m%s\x1b[0m', 'Operation Failed: ', `File ${file} doesn't exist`);
    else console.log('\x1b[31m%s\x1b[0m', 'Operation Failed: ', e.message);
  }
};

export const cp = async (src, dest, opt = 'cp') => {
  const srcName = resolve(src);
  const destName = resolve(dest);
  try {
    await access(destName, constants.R_OK | constants.W_OK);
    console.log('\x1b[31m%s\x1b[0m', 'Operation Failed: ', `File ${dest} exists`);
  } catch (e) {
    try {
      await access(src, constants.R_OK | constants.W_OK);
      await new Promise((resolve) => {
        const readStream = createReadStream(srcName);
        const writeStream = createWriteStream(destName);
        readStream.pipe(writeStream);
        writeStream.on('finish', () => {
          console.log('File copied successfully');
          resolve();
        });
      });
    } catch (e) {
      if (e.code === 'ENOENT')
        console.log('\x1b[31m%s\x1b[0m', 'Operation Failed: ', `File ${src} doesn't exist`);
      else console.log(e.message);
    }
  }
};

export const mv = async (src, dest) => {
  try {
    const res = await access(resolve(dest), constants.R_OK | constants.W_OK);
    console.log('\x1b[31m%s\x1b[0m', 'Operation Failed: ', `File ${dest} exists`);
  } catch (e) {
    console.log(e.message);
    await cp(src, dest);
    await rm(src);
  }
};

export const rn = async (src, dest) => {
  const fullCurrentName = resolve(src);
  const fullNewName = resolve(dest);
  try {
    await access(fullNewName, constants.R_OK | constants.W_OK);
    console.log('\x1b[31m%s\x1b[0m', 'Operation Failed: ', `File ${dest} exists`);
  } catch (e) {
    try {
      await rename(fullCurrentName, fullNewName);
    } catch (e) {
      if (e.code === 'ENOENT') {
        console.log('\x1b[31m%s\x1b[0m', 'Operation Failed: ', `File ${src} doesn't exist`);
        return;
      }
      console.log(e.message);
    }
  }
};

export const rm = async (file) => {
  const fullFileName = resolve(file);
  try {
    await access(fullFileName, constants.R_OK | constants.W_OK);
    await unlink(fullFileName);
    console.log('File deleted sucsessfully');
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log('\x1b[31m%s\x1b[0m', 'Operation Failed: ', `File ${file} doesn't exist`);
      return;
    }
    console.log(e.message);
  }
};
