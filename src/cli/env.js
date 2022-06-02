export const parseEnv = () => {
  console.clear()

  function main() {
    try {
      console.log(parseVariables(process.env))
    } catch (e) {
      console.error(e);
    }
  }
  main()

  function parseVariables(data) {
    const variables = Object.keys(data)
    const cutIndex = variables.indexOf('NODE')
    return variables.slice(0, cutIndex)
                    .map(variable => `RSS_${variable}=${data[variable]}`)
                    .join('; ')
  }
};

parseEnv()