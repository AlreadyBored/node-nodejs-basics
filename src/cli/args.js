import { argv } from 'node:process'
const parseArgs = () => {
    // Write your code here
  try {
    let args = '';
    for (let item of argv) {
      if (item.match(/^--/g)) args = `${args}${item} is ${argv[argv.indexOf(item)+1]}, `;
    }

    console.log(args);
  } catch (e) {
    console.error(e);
  }

};

parseArgs();