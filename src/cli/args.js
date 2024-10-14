const parseArgs = () => {
    const args = process.argv.slice(2);
    const username = args.find(arg => arg.startsWith('--username='));
    return username ? username.split('=')[1] : 'User';
  };
  
  module.exports = { parseArgs };
  