// Get required module
var file_handler = require('fs');
// String with spaces
var my_string = '    My Name Is Rameez    ';

// String without spaces
var new_string = my_string.trim();

// String in lower case
var small_string = new_string.toLowerCase();
// console.log(small_string)

// Creating and writing new string to a text file
file_handler.writeFile('context.txt', small_string, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});