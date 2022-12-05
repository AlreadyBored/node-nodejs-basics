const parseArgs = () => {
	let resultArr = []
	process.argv.slice(2).forEach(arg => {
		resultArr.push(arg.split(' '))
	})

	resultArr.forEach(arg => console.log(`${arg[0].slice(2)} is ${arg[1]}`))
}

parseArgs();