# Node.js basics

## !!! Please don't submit Pull Requests to this repository !!!


## Technical requirements

* Any external tools and libraries are prohibited
* Use 20 LTS version of Node.js
* Don't change signature of pre-written functions (e.g. don't rename them, don't make them synchronous, etc.)
* Prefer asynchronous API whenever possible

# Done:

#### Basic

* File system (src/fs)
  * `create.js` implemented
  * `copy.js` implemented
  * `rename.js` implemented
  * `delete.js` implemented
  * `list.js` implemented
  * `read.js` implemented
* Command line interface(src/cli)
  * `env.js` implemented
  * `args.js` implemented
* Modules(src/modules)
  * `cjsToEsm.cjs` refactored
* Hash (src/hash)
  * `calcHash.js` implemented
* Streams (src/streams)
  * `read.js` implemented
  * `write.js` implemented
  * `ransform.js` implemented
* Zlib (src/zip)
  * `compress.js` implemented
  * `decompress.js` implemented

#### Advanced

* Worker Threads (src/wt)
  * `worker.js` implemented
  * `main.js` implemented
* Child Processes (src/cp)
  * spawns child process
  * child process `stdin` receives input from master process `stdin`
  * child process `stdout` sends data to master process `stdout`
