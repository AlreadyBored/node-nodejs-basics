import { parseArgs } from './cli/args.js';
import { greeteing, farewell } from './helpers/message.js';
const USER_NAME_ARGUMENT = 'username';

const args = parseArgs();
let userName = 'JOHN DOE';
if (args[USER_NAME_ARGUMENT]) {
  userName = args[USER_NAME_ARGUMENT];
  greeteing(userName);
}

process.exit(farewell(userName));
