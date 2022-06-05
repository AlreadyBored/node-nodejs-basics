import { stdin, stdout } from 'process';

export const transform = async () => {
  const transformText = (text) => {
    return text.split('').reverse().join('');
  };

  stdin.on('data', (data) => {
    stdout.write(transformText(data.toString()));
  });
  process.on('SIGINT', () => {
    console.log('\nInput interrupted...');
    process.exit(0);
  });
};

transform();
