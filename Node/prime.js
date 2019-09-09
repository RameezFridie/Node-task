// Create a module called ‘primes.js’ that finds returns all the prime numbers between 1 and 100.

// Empty array of prime numbers -- Main Array
const prime_numbers = []

// Function to find prime numbers or non-prime numbers
function get_prime_numbers(max_number) {
    // Create a new empty array
    var prime_check = new Array(max_number)
        // Generates an array and all numbers are prime numbers
    for (var i = 1; i < max_number; i++) {
        // All numbers are prime numbers until its proven not to be a prime number
        prime_check[i] = true
    }
    // For loop to check the array to find prime numbers
    for (var p = 2; p < max_number; p++) {
        // if prime number found push prime number into the main array
        if (prime_check[p]) {
            // Push prime numbers 
            prime_numbers.push(p)
                // Filters out non-prime numbers
            for (var t = p * 2; t < max_number; t += p) {
                prime_check[t] = false
            }
        }
    }
    console.log(prime_numbers)
    return prime_numbers
}
// // Create test file to display prime numbers
// var fs = require('fs');
// fs.writeFileSync('test_prime.txt', get_prime_numbers(100));
// module.exports.get_prime_numbers = get_prime_numbers



// Export function
module.exports.get_prime_numbers = get_prime_numbers