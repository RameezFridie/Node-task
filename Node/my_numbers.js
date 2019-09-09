// Create a Node.js file called ‘my_numbers.js’ that uses the modules (‘prime.js’ and ‘even_nums.js’) that you created. The program should:
// ○ Write the word “Primes:” and then the prime numbers returned by ‘primes.js’ in a text file called ‘nums.txt’
// ○ It should then append the heading “Even numbers:” and the even numbers returned by ‘even_nums.js’ to ‘nums.txt.
// ○ Write a message to the console that indicates whether the file was created successfully or not.
// ○ Read ‘nums.txt’ and display the contents of this file in the browser when the user navigates to
var make_file = require('fs')
var prime = require('./prime')
var even = require('./even_number')
const http = require('http');

var primes = "Primes: "
var evens = "Even Numbers: "
make_file.writeFile('num.txt', primes + prime.get_prime_numbers(100) + "\n" + evens + even.even_numbers(), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});


// Creating a server for number text file to display prime and even numbers
make_file.readFile('./num.txt', 'utf-8', (err, data) => {
    if (err) throw err
    http.createServer(function(request, response) {
        response.write(data)
        response.end()
    }).listen(3000)
})