const parseArgs = () => {
    const args = process.argv.slice(2); 
    const result = [];
  
    for (let i = 0; i < args.length; i += 2) {
      const key = args[i];
      const value = args[i + 1];
      if (key.startsWith('--')) {
        result.push(`${key.substring(2)} is ${value}`);
      }
    }
  
    console.log(result.join(', '));
  };
  
  export { parseArgs };
  