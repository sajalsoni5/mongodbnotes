//Why we should use streams
let fs = require("fs");
//bigfile.txt : 2.82GB
fs.readFile("bigfile.txt", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
// output:
// RangeError [ERR_FS_FILE_TOO_LARGE]: File size (3030000000) is greater than 2 GB
//     at FSReqCallback.readFileAfterStat [as oncomplete] (fs.js:303:11) {
//   code: 'ERR_FS_FILE_TOO_LARGE'
// }

// The above code gave error becuase the bigfile couldn't fit into the buffer
// the readFile uses full buffer which is 2GB for this machine
// since the file size is greater than the 2GB Buffer size , it can't read it as it tries to read all at once

let readStream = fs.createReadStream("bigfile.txt");
readStream.on("data", (chunk) => {
  console.log(chunk);
});
// output:
// <Buffer 7a 43 65 68 35 50 34 65 45 30 39 59 57 7a 76 4c 54 66 51 33 79 75 4f 45 46 52 5a 71 39 33 43 4f 6d 69 71 36 59 41 4f 62 70 56 6c 38 46 38 4b 65 20 47 ... 65486 more bytes>
// <Buffer 5a 68 33 74 66 73 62 34 75 32 6e 46 44 76 34 52 4b 4e 49 65 73 49 44 72 56 66 37 4c 6c 30 77 58 41 20 78 20 54 64 74 47 69 39 4e 64 66 4e 6a 66 79 76 ... 65486 more bytes>
// <Buffer 68 62 68 44 77 45 36 54 43 42 6d 4f 7a 61 69 76 53 48 52 4c 76 79 65 53 4e 47 49 31 64 61 75 79 6b 62 36 36 38 34 33 52 30 47 78 4a 47 4b 38 68 64 64 ... 65486 more bytes>
// <Buffer 0a 74 20 50 4c 67 77 59 55 32 6f 4f 67 59 7a 7a 58 77 4f 56 42 49 4f 59 76 4e 38 59 20 66 4d 43 4f 48 6f 4d 75 6d 66 76 4a 75 73 79 55 7a 7a 4e 54 37 ... 65486 more bytes>
