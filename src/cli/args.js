const parseArgs = () => {
    const args = process.argv.slice(2)
    for (let i = 0; i < args.length; i+=2) {
        let key = args[i].replace("--", "")
        let value = args[i + 1]
        console.log(`${key} is ${value}`)
    }
}
  
  parseArgs();
  