import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import * as cp from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const spawnChildProcess = async (args) => {
	cp.fork(`${__dirname}/files/script.js`, args)
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg one', 'arg two']);
