import {fileURLToPath} from "url";
import {dirname, join} from "path";
import {Worker} from "worker_threads"

const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename)
  const fileName = "worker.js"
  const path = join(__dirname, fileName)
  const worker = (index) => {
    return new Promise((res) => {
      const wr = new Worker(path, {workerData: index})
      wr.on("message", res)
    })
  }

  const count = 8
  const workerList = () => {
    const promiseList = []
    for (let i = 0; i < count; i++) {
     promiseList.push(worker(i + 10))
    }
    return promiseList
  }
  return Promise.all(workerList()).then((data) => {
    const list = data.reduce((acc, val) => {
      return [
        ...acc,
        {status: "resolved", data: val}
      ]
    }, [])
    console.log(list)
  }).catch(() => {
    const list = []
    for (let i = 0; i<count; i++) {
      list.push({status:"error", data: null})
    }
    console.log(list)
  })
};

await performCalculations();