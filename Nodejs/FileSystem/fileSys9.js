//zlib is used for compression
const fs = require("fs");
const zlib = require("zlib");
const gzip = zlib.createGzip(); //this will transform the data into compressed data

let readStream = fs.createReadStream("bigfile.txt", "utf-8");
let writeStream = fs.createWriteStream("example.txt.gz"); //note .gz

readStream.pipe(gzip).pipe(writeStream); //passing the chunks to gzip to compress and using writestream to create the file
