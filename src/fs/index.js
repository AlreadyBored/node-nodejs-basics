import { copy } from './copy.js';
import { create } from './create.js';
import { rename } from './rename.js';
import { remove } from './delete.js';
import { list } from './list.js';
import { read } from './read.js';

const fs = async () => {
  await create();
  await copy();
  await rename();
  await remove();
  await list();
  await read();
};

fs();
