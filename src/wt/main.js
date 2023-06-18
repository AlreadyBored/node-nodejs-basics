import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { cpus } from 'os';
import { Worker } from 'worker_threads';

const workerFileName = 'worker.js';

let result = [];

// Create one worker promise.
function createWorker(i) {

    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileWorkerPath = path.join(__dirname, workerFileName);

    return new Promise(function(resolve, reject) {
        var w = new Worker(fileWorkerPath, 
            {
                workerData: i+10,
            });

        w.on("message", (msg) => {
            // Keep 'i' as index to sort at the end.
            result.push({status: 'resolved', data: [i, msg]});
            resolve(msg);
        });

        w.on("error", (msg) => {
            // Keep 'i' as index to sort at the end.
            result.push({status: 'error', data: [i, null]});
            resolve(msg);
        });
    });
}

const performCalculations = async () => {

    var promises = [];
    for(var i = 0; i < cpus().length; i++) {
        promises.push(createWorker(i));
    }

    // Wait finishing af all.
    Promise.all(promises)
        .then(function(data) {  

            // Sort by index.
            result.sort(function(a, b) {
                var keyA = new Date(a.data[0]),
                  keyB = new Date(b.data[0]);
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
              });

            // Remove indexes.
            for(var i = 0; i < result.length; i++) {
                result[i]['data'] = result[i]['data'].at(1);
            }

            console.log(result);
        })
        .catch(function(error) {            
            console.error("Error:" + error);
        });
    
};

await performCalculations();