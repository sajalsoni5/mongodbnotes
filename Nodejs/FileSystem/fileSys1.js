const fs = require("fs");
fs.writeFile(
  "test.txt", //FIrst argument which is file name
  "This is a sample text file created using fs module", //Second arg which is the content inside file
  (err) => {
    //Third arg which is callback func which shows err or success
    if (err) console.log(err);
    else console.log("file created successfully");
  }
);
// output:
// file created successfully

fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log("showing data:", data);
});
// output:
// showing data: This is a sample text file created using fs module

fs.readFile("test.txt", (err, data) => {
  //this is what happens when you omit the character encoding
  if (err) console.log(err);
  else console.log("showing data:", data);
});

//output:
// showing data: <Buffer 54 68 69 73 20 69 73 20 61 20 73 61 6d 70 6c 65 20 74 65 78 74 20 66 69 6c 65 20 63 72 65 61 74 65 64 20 75 73 69 6e 67 20 66 73 20 6d 6f 64 75 6c 65>
