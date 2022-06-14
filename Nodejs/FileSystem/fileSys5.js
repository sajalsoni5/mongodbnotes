let fs = require("fs");
//fs.mkdir() lets you create a directory/folder

// fs.mkdir("exampledir", (err) => {
//   if (err) console.log(err);
//   else {
//     console.log("Directory created successfully");
//   }
// });
//output: Directory created successfully

// fs.mkdir("exampledir", (err) => {
//   if (err) console.log(err);
//   else {
//     fs.writeFile("exampledir/test.txt", "this is some data", (err) => {
//       if (err) console.log(err);
//       else {
//         console.log("file created successfully");
//       }
//     });
//   }
// });
//output1: if directory already exists , we get err
//output2:file created successfully
//folder: exampledir >> file: test.txt

//To Remove a directory
// fs.rmdir("exampledir", (err) => {
//   if (err) console.log(err);
//   else {
//     console.log("directory removed successfully");
//   }
// });
//If a File exist inside the directory we will get following error
// output1: [Error: ENOTEMPTY: directory not empty, rmdir 'C:\Users\sajal\Desktop\MongoDB Notes\Nodejs\FileSystem\exampledir'] {
// IF folder is empty
// output2: directory removed successfully

// we can also create and remove directory simultaneuosly
fs.mkdir("exampledir", (err) => {
  if (err) console.log(err);
  else {
    console.log("Directory created successfully");
    fs.rmdir("exampledir", (err) => {
      if (err) console.log(err);
      else {
        console.log("directory removed successfully");
      }
    });
  }
});
// output: Directory created successfully
// directory removed successfully
