import {fork} from 'child_process';
import path from 'path';

import { getDir } from '../utils/getDir.js';

const dirname = getDir(import.meta.url);
const filename = path.join(dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    fork(filename, args)
};

spawnChildProcess([1, 2, 3, 4, 5]);
