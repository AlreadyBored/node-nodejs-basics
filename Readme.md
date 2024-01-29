# Node.js basics

## !!! Please don't submit Pull Requests to this repository !!!

worker.js - extend given function to work with data received from main thread and implement function which sends result of the computation to the main thread



main.js - implement function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file worker.js and able to send data to those threads and to receive result of the computation from them. You should send incremental number starting from 10 to each worker. For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker, 11 to second worker, 12 to third worker, 13 to fourth worker. After all workers will finish, function should log array of results into console. The results are array of objects with 2 properties:
status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker
data - value from worker in case of success or null in case of error in worker
