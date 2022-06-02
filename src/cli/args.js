import { stderr, stdout } from "process";

export const parseArgs = () => {
  try {
    const args = process.argv.slice(2);
    stdout.write(`\t\t\t -----THE LIST OF THE ARGUMENTS----- \n`);
      if (!args.length) {
        stdout.write(`There are no arguments.`);
        return;
      }
      args.forEach((arg, index) => stdout.write(`${ index % 2 ? arg + "\n" : arg.replace(/-/g, "") + " = "}`));
    }
  catch(err) {
    stderr.write(`ERROR>>> It is incredably, but something gets wrong... \n ${err.message} \n`);
  }; 
};

//parseArgs();
// PASTE IT IN THE CONSOLE    node args.js --argumentOne valueOne --argumentTwo valueTwo