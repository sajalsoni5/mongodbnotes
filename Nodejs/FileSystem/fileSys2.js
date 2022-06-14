const fs = require("fs");
//fs.appendFile is used to add more data to existing file...
//if we run the program 3 times it will add the same data 3 times

fs.appendFile("test.txt", "\n This is more appended data", (err) => {
  if (err) console.log(err);
  else console.log("More data appended successfully");
});

//test.txt
// This is a sample text file created using fs module
//  This is more appended data
//  This is more appended data
//  This is more appended data
