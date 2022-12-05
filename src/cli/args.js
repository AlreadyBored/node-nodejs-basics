const parseArgs = () => {

	let cliArgs = process.argv.slice(2)
	let res = []

	cliArgs.forEach((arg, i, arr) => {
		let nextVal = arr[i + 1]

		if (arr[i].startsWith('--')) {
			res.push(`${arr[i].slice(2)} is ${nextVal}`)
		}
	})

	console.log(res.join(', '))
}

parseArgs();