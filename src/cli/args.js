import {log} from "../fs/utils.mjs";

const parseArgs = () => {
  const propNamePrefix = '--';
  const {argv} = process;
  const result = [];
  for (let idx = 2; idx < argv.length; idx += 2) {
    const argKey = argv[idx];
    const argValue = argv[idx + 1];
    if (argKey && argKey.startsWith(propNamePrefix) && argValue) {
      result.push(`${argKey.substring(propNamePrefix.length)} is ${argValue}`);
    }
  }
  !!result.length && log(result.join(', '));
};

parseArgs();
