const VALID_ENV_PREFIX = '--';

const parseArgs = () => {
  const argsParts = process.argv.reduce((result, currentEnvValue, index, arr) => {
    if (currentEnvValue.startsWith(VALID_ENV_PREFIX)) {
      const envData = `${currentEnvValue.replace(VALID_ENV_PREFIX, '')} is ${arr[index + 1]}`;
      return [...result, envData];
    }

    return result;
  }, []);

  const result = argsParts.join(', ');
  console.log(result);
};

parseArgs();
