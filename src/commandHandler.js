import { add, cat, rn, cp, rm, mv } from './basicOperations.js';
import { cd, up, ls } from './navigation.js';
import osHandler from './osHandler.js';
import { checkArgs } from './functions.js';
import calculateHash from './hash.js';
import compressor from './compress.js';

export const commandHandler = async (command, user) => {
  switch (command[0]) {
    case '':
      break;
    case 'up': {
      up();
      break;
    }

    case 'cd': {
      cd(command[1]);
      break;
    }

    case 'ls': {
      await ls();
      break;
    }

    case 'add': {
      if (checkArgs(command, 1)) await add(command[1]);
      break;
    }

    case 'cat': {
      if (checkArgs(command, 1)) await cat(command[1]);
      break;
    }

    case 'rn': {
      if (checkArgs(command, 2)) await rn(command[1], command[2]);
      break;
    }

    case 'cp': {
      if (checkArgs(command, 2)) await cp(command[1], command[2], 'cp');
      break;
    }

    case 'mv': {
      if (checkArgs(command, 2)) await mv(command[1], command[2]);
      break;
    }

    case 'rm': {
      if (checkArgs(command, 1)) await rm(command[1]);
      break;
    }

    case 'os': {
      if (checkArgs(command, 1)) osHandler(command[1]);
      break;
    }

    case 'hash': {
      if (checkArgs(command, 1)) await calculateHash(command[1]);
      break;
    }

    case 'compress': {
      if (checkArgs(command, 2)) await compressor(command[1], command[2], 'compress');
      break;
    }

    case 'decompress': {
      if (checkArgs(command, 2)) await compressor(command[1], command[2], 'decompress');
      break;
    }

    case '.exit': {
      console.log('Thank you for using File Manager,', user, ' goodbye!');
      process.exit();
    }

    default: {
      console.log('Invalid command');
    }
  }
};
