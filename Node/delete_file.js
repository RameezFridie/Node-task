// Create a module called ‘delete_file.js’ that will delete ‘nums.txt’ when called

var fs = require('fs')

// Assuming that 'num.txt' is a regular file.
fs.unlink('num.txt', (err) => {
    if (err) throw err;
    console.log('num.txt was deleted');
});