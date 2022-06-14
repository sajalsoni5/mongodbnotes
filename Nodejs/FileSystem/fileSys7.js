// Read And Write Stream
// instead of reading all the data at one read and write stream read the data in chunks

let fs = require("fs");
// let readStream = fs.createReadStream("bigfile.txt");

// readStream.on("data", (chunk) => {
//   console.log(chunk);
// });
// output:
// <Buffer 6f 50 63 69 42 75 58 51 46 59 34 43 4d 4f 61 53 6b 47 77 74 64 6a 67 35 79 77 62 63 76 42 70 48 73 4a 73 4c 67 62 55 49 44 48 63 46 35 6c 37 75 45 31 ... 65486 more bytes>
// <Buffer 49 5a 66 33 77 43 43 6f 70 50 7a 20 0a 72 74 78 74 70 30 75 39 5a 65 61 6e 54 4c 55 4f 6e 57 4c 61 38 4e 56 6e 31 72 4a 6b 4f 44 6b 55 6b 75 6f 71 4a ... 65486 more bytes>
// <Buffer 77 69 6b 46 34 47 39 56 6a 44 6f 30 54 4b 54 6f 39 66 32 43 63 74 56 73 4f 0a 6e 39 39 4c 50 70 69 74 4d 34 36 32 37 4a 68 57 52 43 64 4e 64 47 66 6d ... 65486 more bytes>

//using utf-8 will convert binary data to text
// let readStream = fs.createReadStream("bigfile.txt", "utf-8");

// readStream.on("data", (chunk) => {
//   console.log(chunk);
// });
// output: text data

// Write Stream
// here  the program started writing the file as soon as it gets chunks(parts) of data from read stream
// instead of waiting for the file to be fully loaded

let readStream = fs.createReadStream("bigfile.txt", "utf-8");
let writeStream = fs.createWriteStream("example.txt");

readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});

//Pipe
//instead of using readstream.on method  we can use pipe to achieve the same results

readStream.pipe(writeStream);
