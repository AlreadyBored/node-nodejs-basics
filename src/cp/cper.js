'use strict'

import { spawnChildProcess } from './cp.js'

(async () => { await spawnChildProcess(process.argv.slice(2)) })()
