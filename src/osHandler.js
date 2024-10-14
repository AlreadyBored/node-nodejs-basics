import os from 'os';
const osHandler = (arg) => {
  switch (arg) {
    case '--EOL': {
      console.log(`OS EOL: `, JSON.stringify(os.EOL));
      break;
    }

    case '--cpus': {
      const cpus = os.cpus();
      const table = [];
      cpus.forEach((cpu) => {
        table.push({ Model: cpu.model, ClockRate_Mhz: cpu.speed });
      });
      console.log(`This machine has ${table.length} CPUs`);
      console.table(table);
      break;
    }
    case '--homedir': {
      console.log('Your home dir is:', os.homedir());
      break;
    }

    case '--username': {
      console.log('Current User name is:', os.userInfo().username);
      break;
    }

    case '--architecture': {
      console.log('CPU architecture is:', os.arch());
      break;
    }

    default: {
      console.log('Invalid command');
    }
  }
};

export default osHandler;
